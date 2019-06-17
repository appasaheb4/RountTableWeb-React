import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Loader } from "react-overlay-loader";
import Dialog from "react-bootstrap-dialog";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Fab from "@material-ui/core/Fab";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import overlayFactory from "react-bootstrap-table2-overlay";
import Modal from "react-modal";




//Custome File
import { colors, apiary } from "../../../app/constants/Constants";
// var utils = require( "../../../../../app/constants/Utils" );  
var ApiManager = require( "../../../app/manager/ApiManager/ApiManager" );

const customStyles = {
    content: {
        top: "50%",
        left: "60%",
        right: "60%",
        bottom: "auto",
        marginRight: "-50%",
        backgroundColor: "#000",
        opacity: 0.7,
        color: "#fff",
        transform: "translate(-50%, -50%)"
    }
};

export default class UserDetailsScreen extends Component<any, any> {
    constructor ( props: any ) {
        super( props );

        this.state = {
            data: [],

        };
    }


    async componentWillMount() {
        var data = await ApiManager.getAllData( apiary.getAllDeviceUserInfo );
        data = data.data;
        let temp = [];
        for ( let i = 0; i < data.length; i++ ) {
            let deviceinfo = JSON.parse( data[ i ].deviceInfo );
            let userdetails = JSON.parse( data[ i ].userInfo );
            let jsonData = {};
            jsonData.id = data[ i ].id;
            jsonData.tableNo = deviceinfo[ 0 ].tableNo;
            jsonData.deviceNo = deviceinfo[ 0 ].deviceNo;
            jsonData.userdetails = "Manufacture: " + userdetails[ 0 ].manufacture + ", Model: " + userdetails[ 0 ].model + ", Contry: " + userdetails[ 0 ].deviceContry;
            temp.push( jsonData )
        }
        this.setState( {
            data: temp
        } );
    }


    deleteData( item: any ) {
        var body = {
            id: item.id
        };
        axios( {
            method: "post",
            url: apiary.deleteDeviceUserInfo,
            data: body
        } )
            .then( response => {
                let data = response.data.data;
                ToastsStore.success( data );
                this.componentWillMount();
            } )
            .catch( function ( error ) {
                console.log( error );
            } );
    }




    render() {
        const { loading } = this.state;
        const columns = [
            {
                dataField: "id",
                text: "Id",
                hidden: true,
                editable: false
            },
            {
                dataField: "deviceNo",
                text: "Device No"
            },
            {
                dataField: "tableNo",
                text: "Table No"
            },
            {
                dataField: "userdetails",
                text: "User Device Details"
            },
            {
                dataField: "operation",
                text: "Delete",
                style: {
                    width: 10
                },
                editable: false,
                formatter: ( cellContent, row ) => (
                    <div>
                        <Fab
                            color="secondary"
                            aria-label="delete"
                            size="small"
                            onClick={ () => {
                                this.dialog.show( {
                                    title: "Confirmation",
                                    body: "Are you sure delete data?",
                                    actions: [
                                        Dialog.CancelAction(),
                                        Dialog.OKAction( () => {
                                            this.deleteData( row );
                                        } )
                                    ],
                                    bsSize: "small",
                                    onHide: dialog => {
                                        dialog.hide();
                                        console.log( "closed by clicking background." );
                                    }
                                } );
                            } }
                        >
                            <FaRegTrashAlt />
                        </Fab>
                    </div>
                )
            }
        ];
        return (
            <div>
                <Container>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={ this.state.tabKey }
                        onSelect={ key => this.setState( { tabKey: key } ) }
                    >
                        <Tab eventKey="view" title="View" >
                            <section>
                                <BootstrapTable
                                    keyField="id"
                                    data={ this.state.data }
                                    columns={ columns }
                                    hover
                                    pagination={ paginationFactory() }
                                />
                            </section>
                        </Tab>
                    </Tabs>
                    <Dialog
                        ref={ component => {
                            this.dialog = component;
                        } }
                    />
                    <ToastsContainer store={ ToastsStore } />
                </Container>
            </div>
        );
    }
}  

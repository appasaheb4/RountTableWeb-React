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

export default class InquriyInfoScreen extends Component<any, any> {
    constructor ( props: any ) {
        super( props );

        this.state = {
            data: [],

        };
    }


    async componentWillMount() {
        let data = await ApiManager.getAllData( apiary.getAllTableInfo );
        console.log( { data } );

        this.setState( {
            data: data.data
        } );
    }

    // //TODO: func connection_UpdateData
    // connection_UpdateData( oldValue, newValue, item ) {
    //     if ( oldValue != newValue ) {
    //         this.updateDate( item );
    //     }
    // }

    // updateDate( item: any ) {
    //     var body = {
    //         id: item.id,
    //         name: item.name,
    //         mobileNo: item.mobileNo,
    //         address: item.address,
    //         dis: item.dis
    //     };
    //     axios( {
    //         method: "post",
    //         url: apiary.updateInquriyInfo,
    //         data: body
    //     } )
    //         .then( response => {
    //             let data = response.data.data;
    //             console.log( { data } );
    //             ToastsStore.success( data );
    //             this.componentWillMount();
    //         } )
    //         .catch( function ( error ) {
    //             console.log( error );
    //         } );
    // }

    deleteData( item: any ) {
        var body = {
            id: item.id
        };
        axios( {
            method: "post",
            url: apiary.deleteTableInfo,
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


    onFormSubmit( e: any ) {
        e.preventDefault();
        let date = Date.now();
        var body = {
            date: date,
            tableNo: e.target.tableNo.value,
            note: e.target.note.value,
            userId: "1"
        };
        console.log( { body } );
        axios
            .post( apiary.insertTableInfo, body )
            .then( response => {
                let data = response.data.data;
                ToastsStore.success( data );
                this.componentWillMount();
            } )
            .catch( error => {
                console.log( { error } );
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
                dataField: "tableNo",
                text: "Table No"
            },
            {
                dataField: "note",
                text: "Note"
            },
            {
                dataField: "opration",
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
                        <Tab eventKey="new" title="New" >
                            <section>
                                <form
                                    onSubmit={ this.onFormSubmit.bind( this ) }
                                    enctype="multipart/form-data"
                                >
                                    <div className="form-group form-inline">
                                        <span className="col-md-2">Table No:</span>
                                        <input
                                            type="text"
                                            name="tableNo"
                                            className="form-control col-md-4"
                                            placeholder="e.g Table 1"
                                            required
                                        />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="form-group form-inline" >
                                        <span className="col-md-2">Note:</span>
                                        <textarea
                                            type="text"
                                            rows={ 2 }
                                            name="note"
                                            className="form-control col-md-4"
                                            placeholder="Note"
                                        ></textarea>
                                    </div>
                                    <div className="form-group" style={ { marginLeft: '30%' } }>
                                        <input
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Save"
                                        />
                                        <div className="clearfix"></div>
                                    </div>

                                </form>
                            </section>
                        </Tab>
                        <Tab eventKey="view" title="View">
                            <BootstrapTable
                                keyField="id"
                                data={ this.state.data }
                                columns={ columns }
                                hover
                                pagination={ paginationFactory() }
                            />
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

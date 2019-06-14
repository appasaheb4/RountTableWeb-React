export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      title: true,
      name: "Home",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Front",
      url: "/front",
      icon: "icon-cursor",
      children: [
        {
          name: "Slider Images",
          url: "/front/sliderImages",
          icon: "icon-cursor"
        },
        {
          name: "Customer Info",
          url: "/front/frontCustomeInfo",
          icon: "icon-cursor"
        }
      ]
    },
    {
      title: true,
      name: "Admin",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Inquiry",
      url: "/inquriy",
      icon: "icon-cursor",
      children: [
        {
          name: "Inquiry Info",
          url: "/inquriy/InquiryInfo",
          icon: "icon-cursor"
        },
        {
          name: "Customer Info",
          url: "/inquriy/CustomerInfo",
          icon: "icon-cursor"
        }
      ]
    },
    {
      name: "Product",
      url: "/product",
      icon: "icon-cursor",
      children: [
        {
          name: "Category",
          url: "/product/Category",
          icon: "icon-cursor"
        },
        {
          name: "New Product",
          url: "/product/newProduct",
          icon: "icon-cursor"
        }
      ]
    },
    {
      name: "Billing",
      url: "/billing",
      icon: "icon-cursor",
      children: [
        {
          name: "New Billing",
          url: "/billing/newBilling",
          icon: "icon-cursor"
        }
      ]
    },
    {
      title: true,
      name: "Advertisement",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "SMS",
      url: "/advertisement",
      icon: "icon-cursor",
      children: [
        {
          name: "Customer SMS",
          url: "/advertisement/smsCustomer",
          icon: "icon-cursor"
        }
      ]
    },
    {
      title: true,
      name: "Reports",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Billing",
      url: "/reports",
      icon: "icon-cursor",
      children: [
        {
          name: "New Billing",
          url: "/reports/newBillingReports",
          icon: "icon-cursor"
        }
      ]
    }

  ]
};

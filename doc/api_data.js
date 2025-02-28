define({ "api": [
  {
    "version": "0.1.0",
    "type": "delete",
    "url": "customers/:id",
    "title": "Delete softly a customer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>customer id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.router.js",
    "groupTitle": "Customer",
    "name": "DeleteCustomersId"
  },
  {
    "version": "0.1.0",
    "type": "delete",
    "url": "customers/remove/:id",
    "title": "Remove a customer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>customer id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.router.js",
    "groupTitle": "Customer",
    "name": "DeleteCustomersRemoveId"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "customers/",
    "title": "Find all customers",
    "group": "Customer",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"46a78718-4603-4f64-88d6-db6eb6db2071\",\n  \"name\": \"Jade\",\n  \"address\": \"221B Baker Street\",\n  \"dateOfbirth\": \"12/29/2008\",\n  \"createdAt\": \"Fri Nov 10 2017 18:24:08 GMT-0200 (-02)\",\n  \"updatedAt\": \"Fri Nov 12 2017 13:35:49 GMT-0200 (-02)\",\n  \"deleted\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.router.js",
    "groupTitle": "Customer",
    "name": "GetCustomers"
  },
  {
    "version": "0.1.0",
    "type": "get",
    "url": "customers/diff/:date",
    "title": "Find the customers modified after a date",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>a date reference</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"46a78718-4603-4f64-88d6-db6eb6db2071\",\n  \"name\": \"Jade\",\n  \"address\": \"221B Baker Street\",\n  \"dateOfbirth\": \"12/29/2008\",\n  \"createdAt\": \"Fri Nov 10 2017 18:24:08 GMT-0200 (-02)\",\n  \"updatedAt\": \"Fri Nov 12 2017 13:35:49 GMT-0200 (-02)\",\n  \"deleted\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "customer not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.router.js",
    "groupTitle": "Customer",
    "name": "GetCustomersDiffDate"
  },
  {
    "version": "0.1.0",
    "type": "post",
    "url": "customers/",
    "title": "Register a new customer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>customer name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>customer address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateOfbirth",
            "description": "<p>customer dateOfbirth</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Jade\",\n  \"address\": \"221B Baker Street\",\n  \"dateOfbirth\": \"12/29/2008\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"46a78718-4603-4f64-88d6-db6eb6db2071\",\n  \"name\": \"Jade\",\n  \"address\": \"221B Baker Street\",\n  \"dateOfbirth\": \"12/29/2008\",\n  \"createdAt\": Fri Nov 10 2017 18:24:08 GMT-0200 (-02),\n  \"deleted\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.router.js",
    "groupTitle": "Customer",
    "name": "PostCustomers"
  },
  {
    "version": "0.1.0",
    "type": "put",
    "url": "customers/",
    "title": "Edit a customer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>customer name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>customer address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateOfbirth",
            "description": "<p>customer dateOfbirth</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Jade\",\n  \"address\": \"221B Baker Street\",\n  \"dateOfbirth\": \"12/29/2008\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 46a78718-4603-4f64-88d6-db6eb6db2071,\n  \"name\": \"Jade\",\n  \"address\": \"221B Baker Street\",\n  \"dateOfbirth\": \"12/29/2008\",\n  \"createdAt\": Fri Nov 10 2017 18:24:08 GMT-0200 (-02),\n  \"updatedAt\": Fri Nov 12 2017 13:35:49 GMT-0200 (-02),\n  \"deleted\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "routes/customer.router.js",
    "groupTitle": "Customer",
    "name": "PutCustomers"
  }
] });

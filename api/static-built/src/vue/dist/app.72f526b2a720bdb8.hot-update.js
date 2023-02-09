"use strict";
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevueapp"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_myButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/myButton */ "./src/components/myButton.vue");
/* harmony import */ var _components_navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar.vue */ "./src/components/navbar.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data() {
    return {
      buttons: [{
        label: 'All Activity',
        left: '373px',
        selected: false
      }, {
        label: 'Actions',
        left: '526px',
        selected: false
      }, {
        label: 'Referrals',
        left: '679px',
        selected: false
      }]
    };
  },
  components: {
    myButton: _components_myButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    navbar: _components_navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    selectButton(index) {
      this.buttons.forEach((item, i) => {
        item.selected = i === index;
      });
    },
    postAction: async function () {
      //TODO: build this obj with a form
      let action = {
        "id": 7,
        "external_action_id": null,
        "added_by": 2,
        "coordinator": 2,
        "call_datetime": "2022-11-27T12:54:16Z",
        "call_duration": null,
        "resident": 1,
        "requested_datetime": "2024-11-27T18:00:00Z",
        "assigned_volunteers": [],
        "action_status": "7",
        "action_priority": "1",
        "public_description": "",
        "private_description": "",
        "help_type": 5,
        "volunteer_made_contact_on": null,
        "assigned_date": "2022-11-27T13:26:15.887669Z",
        "completed_date": null,
        "action_uuid": "37b9d03a-a7a9-11ed-afa1-0242ac120002",
        "time_taken": null,
        "minimum_volunteers": 1,
        "maximum_volunteers": 1,
        "potential_volunteer_ids": [],
        "actionfeedback_set": [],
        "requirements": [1],
        "interested_volunteers": []
      };
      const csrftoken = this.getCookie('csrftoken');
      const json = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: "http://localhost:8000/" + "api/actions/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        method: "POST",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(action),
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success");
        },
        error: err => {
          console.error(JSON.stringify(err));
        }
      }).catch(err => {
        console.err(JSON.stringify(err));
      });
      console.log(JSON.stringify(json));
    },
    postResident: async function () {
      let resident = {
        "id": 3,
        "first_name": "Lin",
        "last_name": "Bench",
        "phone": "111111111111111",
        "phone_secondary": null,
        "email": "bencharefismael@protonmail.com",
        "notes": "",
        "address_line_1": "foo",
        "address_line_2": "bar",
        "address_line_3": null,
        "postcode": "W",
        "internet_access": false,
        "smart_device": false,
        "confident_online_shopping": false,
        "confident_online_comms": false,
        "shielded": false,
        "time_received": null,
        "data_consent_date": "2023-02-08",
        "ward": 1
      };
      const csrftoken = this.getCookie('csrftoken');
      const json = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: "http://localhost:8000/" + "api/residents/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        method: "POST",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(resident),
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success");
        },
        error: err => {
          console.error(JSON.stringify(err));
        }
      }).catch(err => {
        console.err(JSON.stringify(err));
      });
      console.log(JSON.stringify(json));
    },
    deleteResident: async function () {
      const csrftoken = this.getCookie('csrftoken');
      const json = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: "http://localhost:8000/" + "api/residents/37/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        method: "DELETE",
        type: "DELETE",
        contentType: 'application/json',
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success");
        },
        error: err => {
          console.error(JSON.stringify(err));
        }
      }).catch(err => {
        console.err(JSON.stringify(err));
      });
      console.log(JSON.stringify(json));
    },
    getAction: async function (action_id) {
      const csrftoken = this.getCookie('csrftoken');
      const json = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: "http://localhost:8000/" + "api/actions/6/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        method: "GET",
        type: "GET",
        contentType: 'application/json',
        data: JSON.stringify({
          'action_status': '7'
        }),
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success");
        },
        error: err => {
          console.error(JSON.stringify(err));
        }
      }).catch(err => {
        console.err(JSON.stringify(err));
      });
      console.log(JSON.stringify(json));
    },
    updateAction: async function () {
      const csrftoken = this.getCookie('csrftoken');
      const json = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: "http://localhost:8000/" + "api/actions/7/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        method: "PATCH",
        type: "PATCH",
        contentType: 'application/json',
        data: JSON.stringify({
          "action_priority": "2"
        }),
        success: () => {
          //this.$emit('removed-action', response)
          console.log("success");
        },
        error: err => {
          console.error(JSON.stringify(err));
        }
      }).catch(err => {
        console.err(JSON.stringify(err));
      });
      console.log(JSON.stringify(json));
    },
    getCookie: function (name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  },
  created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "app"
    }
  }, [_vm._m(0), _c("header", {
    staticClass: "nav"
  }, [_c("nav", [_c("navbar")], 1), _c("header", {
    staticClass: "title"
  }, [_vm._v(" Coordinator ")]), _vm._l(_vm.buttons, function (item, index) {
    return _c("myButton", {
      key: index,
      attrs: {
        label: item.label,
        left: item.left,
        selected: item.selected
      },
      nativeOn: {
        click: function ($event) {
          return _vm.selectButton(index);
        }
      }
    });
  })], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("head", [_c("title", [_vm._v("Coordinator Dashboard")])]);
}];
render._withStripped = true;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2513ca8131392527"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.72f526b2a720bdb8.hot-update.js.map
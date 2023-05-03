webpackHotUpdate("main",{

/***/ "./src/pages/Contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Common_section_CommonSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ui/Common-section/CommonSection */ "./src/components/ui/Common-section/CommonSection.jsx");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper */ "./src/helper/index.js");
/* harmony import */ var _abis_Market_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abis/Market.json */ "./src/abis/Market.json");
var _abis_Market_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/Market.json */ "./src/abis/Market.json", 1);
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @usedapp/core */ "./node_modules/@usedapp/core/dist/esm/src/index.js");
/* harmony import */ var _assets_data_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/data/data */ "./src/assets/data/data.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.module.js");
/* harmony import */ var _styles_market_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/market.css */ "./src/styles/market.css");
/* harmony import */ var _styles_market_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_market_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/haidaralimasu/Desktop/CPII/frontend/src/pages/Contact.jsx",
    _s = __webpack_require__.$Refresh$.signature();















const Contact = () => {
  _s();

  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [nfts, setNfts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [formInput, updateFormInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    price: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadNFTs();
    loadMyNFTs();
  }, [data, nfts]);
  const nftInterface = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].utils.Interface(_abis_Market_json__WEBPACK_IMPORTED_MODULE_6__);

  const handleCategory = () => {};

  const handleItems = () => {};

  async function loadNFTs() {
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].Contract(_config__WEBPACK_IMPORTED_MODULE_3__["contractAddress"], nftInterface, signer);
    const data = await contract.fetchItemsListed();
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId);
      const meta = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(tokenUri);
      let price = ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].utils.formatUnits(i.price.toString(), "ether");
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description
      };
      return item;
    }));
    setData(items);
  }

  const listNFTForSale = async (id, price) => {
    try {
      if (!price) return;
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const priceFormatted = ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].utils.parseUnits(price, "ether");
      let contract = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].Contract(_config__WEBPACK_IMPORTED_MODULE_3__["contractAddress"], nftInterface, signer);
      let transaction = await contract.resellToken(id, priceFormatted);
      await Object(_helper__WEBPACK_IMPORTED_MODULE_5__["notifyInfo"])("Please Wait", "Transaction is being processed");
      await transaction.wait();
      await Object(_helper__WEBPACK_IMPORTED_MODULE_5__["notifySuccess"])("Congratulations !", "You have successfully listed NFT");
    } catch (error) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_5__["notifyError"])("Oops !", "Something went wrong while reselling");
      console.log(error);
    }
  };

  async function loadMyNFTs() {
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].Contract(_config__WEBPACK_IMPORTED_MODULE_3__["contractAddress"], nftInterface, signer);
    const data = await contract.fetchMyNFTs();
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId);
      const meta = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(tokenUri);
      let price = ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].utils.formatUnits(i.price.toString(), "ether");
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description
      };
      return item;
    }));
    setNfts(items);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_ui_Common_section_CommonSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
            lg: "12",
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "market__product__filter d-flex align-items-center justify-content-between",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "filter__left d-flex align-items-center gap-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "all__category__filter",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("select", {
                    onChange: handleCategory,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("option", {
                      children: "My Posts"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), data.map((item, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
            lg: "3",
            md: "4",
            sm: "6",
            className: "mb-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "single__nft__card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "nft__img",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  src: item.image,
                  alt: "",
                  className: "w-100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "nft__content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h5", {
                  className: "nft__title",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    style: {
                      color: "white"
                    },
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "creator__info-wrapper d-flex gap-3",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    className: "creator__info w-100 d-flex align-items-center justify-content-between",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h6", {
                        children: "Created By"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                        children: "You"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, undefined)
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
            lg: "12",
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "market__product__filter d-flex align-items-center justify-content-between",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "filter__left d-flex align-items-center gap-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "all__category__filter",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("select", {
                    onChange: handleCategory,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("option", {
                      children: "Collected NFTs"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, undefined), nfts.map((nft, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
            lg: "3",
            md: "4",
            sm: "6",
            className: "mb-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "single__nft__card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "nft__img",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  src: nft.image,
                  alt: "",
                  className: "w-100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "nft__content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h5", {
                  className: "nft__title",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    style: {
                      color: "white"
                    },
                    children: nft.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "creator__info-wrapper d-flex gap-3",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    className: "creator__info w-100 d-flex align-items-center justify-content-between",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h6", {
                        children: "Owned By"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                        children: "You"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h6", {
                        children: "Price"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                        children: [nft.price, " MATIC"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: " mt-3 d-flex align-items-center justify-content-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                    onChange: e => updateFormInput({ ...formInput,
                      price: e.target.value
                    }),
                    placeholder: "New price",
                    type: "number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                    onClick: () => listNFTForSale(nft.tokenId, formInput.price),
                    className: "bid__btn d-flex align-items-center gap-1",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("i", {
                      class: "ri-shopping-bag-line"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 25
                    }, undefined), " Resell NFTs"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, undefined)
          }, nft.id, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Contact, "3FVJXEEV0JC6cq4qDOcTlj3qikw=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

__webpack_require__.$Refresh$.register(_c, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.41d7f073d576a91da210.hot-update.js.map
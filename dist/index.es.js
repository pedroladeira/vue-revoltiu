import React, { Component } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

styleInject(css);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Colors;
(function (Colors) {
    Colors["default"] = "default";
    Colors["primary"] = "primary";
    Colors["secondary"] = "secondary";
    Colors["warning"] = "warning";
    Colors["info"] = "info";
    Colors["danger"] = "danger";
    Colors["success"] = "success";
})(Colors || (Colors = {}));
var TxtColor;
(function (TxtColor) {
    TxtColor["default"] = "text-gray-700";
    TxtColor["primary"] = "text-white";
    TxtColor["secondary"] = "text-white";
    TxtColor["warning"] = "";
    TxtColor["info"] = "";
    TxtColor["danger"] = "";
    TxtColor["success"] = "";
})(TxtColor || (TxtColor = {}));
var TxtHoverColor;
(function (TxtHoverColor) {
    TxtHoverColor["default"] = "hover:text-gray-600";
    TxtHoverColor["primary"] = "";
    TxtHoverColor["secondary"] = "";
    TxtHoverColor["warning"] = "";
    TxtHoverColor["info"] = "";
    TxtHoverColor["danger"] = "";
    TxtHoverColor["success"] = "";
})(TxtHoverColor || (TxtHoverColor = {}));
var BgColor;
(function (BgColor) {
    BgColor["default"] = "bg-white";
    BgColor["primary"] = "bg-blue-600";
    BgColor["secondary"] = "bg-gray-800";
    BgColor["warning"] = "";
    BgColor["info"] = "";
    BgColor["danger"] = "";
    BgColor["success"] = "";
})(BgColor || (BgColor = {}));
var BgHoverColor;
(function (BgHoverColor) {
    BgHoverColor["default"] = "";
    BgHoverColor["primary"] = "";
    BgHoverColor["secondary"] = "hover:bg-gray-800";
    BgHoverColor["warning"] = "";
    BgHoverColor["info"] = "";
    BgHoverColor["danger"] = "";
    BgHoverColor["success"] = "";
})(BgHoverColor || (BgHoverColor = {}));
var BorderColor;
(function (BorderColor) {
    BorderColor["default"] = "border-gray-300";
    BorderColor["primary"] = "";
    BorderColor["secondary"] = "border-transparent";
    BorderColor["warning"] = "";
    BorderColor["info"] = "";
    BorderColor["danger"] = "";
    BorderColor["success"] = "";
})(BorderColor || (BorderColor = {}));
//# sourceMappingURL=theme.js.map

var RvButton = /** @class */ (function (_super) {
    __extends(RvButton, _super);
    function RvButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvButton.prototype, "mainClassNames", {
        get: function () {
            var _a = this.props, size = _a.size, norounded = _a.norounded, color = _a.color;
            return classnames({
                'px-3 py-1 md:px-4 md:py-2 font-medium': !size || size === 'md',
                'px-2 py-1 md:px-3 md:py-1': size === 'sm',
                'px-4 py-2 md:px-8 md:py-3 font-bold': size === 'lg',
                'rounded-md': !norounded
            }, color ? BgColor[color] : BgColor.default, color ? BgHoverColor[color] : BgHoverColor.default, color ? TxtColor[color] : TxtColor.default, color ? TxtHoverColor[color] : TxtHoverColor.default, color ? BorderColor[color] : BorderColor.default, [
                'flex',
                'items-center',
                'justify-center',
                'border',
                'focus:z-10 focus:outline-none',
                'transition duration-150 ease-in-out'
            ]);
        },
        enumerable: true,
        configurable: true
    });
    RvButton.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, children = _a.children;
        return (React.createElement("button", { type: "submit", className: this.mainClassNames, onClick: onClick }, children));
    };
    return RvButton;
}(Component));
//# sourceMappingURL=index.js.map

var RvHeading = /** @class */ (function (_super) {
    __extends(RvHeading, _super);
    function RvHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvHeading.prototype, "mainClassNames", {
        get: function () {
            var _a = this.props, h = _a.h, color = _a.color;
            return classnames({
                'text-3xl': !h || h === 1,
                'text-2xl': h === 2,
                'text-xl': h === 3,
                'text-lg': h === 4,
                'text-md': h === 5,
                'text-sm': h === 6
            }, color ? TxtColor[color] : 'text-gray-900', [
                'font-semibold',
                'leading-tight'
            ]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RvHeading.prototype, "headerComponent", {
        get: function () {
            var _a = this.props, h = _a.h, children = _a.children;
            var HeadComponent = "h" + (h || 1);
            return (React.createElement(HeadComponent, { className: this.mainClassNames }, children));
        },
        enumerable: true,
        configurable: true
    });
    RvHeading.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.headerComponent));
    };
    return RvHeading;
}(Component));
//# sourceMappingURL=index.js.map

var RvNavbar = /** @class */ (function (_super) {
    __extends(RvNavbar, _super);
    function RvNavbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvNavbar.prototype, "mainClassNames", {
        get: function () {
            var color = this.props.color;
            return classnames(color ? BgColor[color] : BgColor.default, color ? TxtColor[color] : TxtColor.default);
        },
        enumerable: true,
        configurable: true
    });
    RvNavbar.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("nav", { className: this.mainClassNames }, children));
    };
    return RvNavbar;
}(Component));
//# sourceMappingURL=RvNavbar.js.map

var RvContainer = /** @class */ (function (_super) {
    __extends(RvContainer, _super);
    function RvContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvContainer.prototype, "mainClassNames", {
        get: function () {
            var center = this.props.center;
            return classnames('container', {
                'mx-auto': center
            });
        },
        enumerable: true,
        configurable: true
    });
    RvContainer.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", { className: this.mainClassNames }, children));
    };
    return RvContainer;
}(Component));
//# sourceMappingURL=index.js.map

var RvNavbarContainer = /** @class */ (function (_super) {
    __extends(RvNavbarContainer, _super);
    function RvNavbarContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvNavbarContainer.prototype, "mainClassNames", {
        get: function () {
            return classnames('max-w-7xl mx-auto px-2 sm:px-6 lg:px-8');
        },
        enumerable: true,
        configurable: true
    });
    RvNavbarContainer.prototype.render = function () {
        var _a = this.props, fluid = _a.fluid, children = _a.children;
        return (React.createElement("div", { className: this.mainClassNames },
            React.createElement(RvContainer, { center: !fluid },
                React.createElement("div", { className: "relative flex items-center justify-between h-16" }, children))));
    };
    return RvNavbarContainer;
}(Component));
//# sourceMappingURL=RvNavbarContainer.js.map

var RvNavbarTitle = /** @class */ (function (_super) {
    __extends(RvNavbarTitle, _super);
    function RvNavbarTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvNavbarTitle.prototype, "mainClassNames", {
        get: function () {
            return classnames('flex-1 flex items-center justify-center sm:items-stretch sm:justify-start');
        },
        enumerable: true,
        configurable: true
    });
    RvNavbarTitle.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", { className: this.mainClassNames },
            React.createElement("div", { className: "flex-shrink-0" },
                React.createElement("span", { className: "block lg:hidden h-8 w-auto" }, children),
                React.createElement("span", { className: "hidden lg:block h-8 w-auto" }, children))));
    };
    return RvNavbarTitle;
}(Component));
//# sourceMappingURL=RvNavbarTitle.js.map

var RvMenu = /** @class */ (function (_super) {
    __extends(RvMenu, _super);
    function RvMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvMenu.prototype, "mainClassNames", {
        get: function () {
            var vertical = this.props.vertical;
            return classnames([
                'flex items-baseline'
            ], {
                'flex-wrap px-1 pt-2 pb-3': vertical
            });
        },
        enumerable: true,
        configurable: true
    });
    RvMenu.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", { className: this.mainClassNames }, children));
    };
    return RvMenu;
}(Component));
//# sourceMappingURL=RvMenu.js.map

var RvMenuItem = /** @class */ (function (_super) {
    __extends(RvMenuItem, _super);
    function RvMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RvMenuItem.prototype, "mainClassNames", {
        get: function () {
            var _a = this.props, active = _a.active, vertical = _a.vertical;
            return classnames([
                'mx-1 px-3 py-2',
                'rounded-md',
                'cursor-pointer',
                'text-sm font-medium ',
                'hover:text-white hover:bg-gray-700',
                'focus:outline-none focus:text-white focus:bg-gray-700',
            ], {
                'text-white bg-gray-900': active,
                'text-gray-300': !active,
                'w-full mt-1': vertical
            });
        },
        enumerable: true,
        configurable: true
    });
    RvMenuItem.prototype.render = function () {
        var _a = this.props, url = _a.url, children = _a.children;
        return (React.createElement("a", { className: this.mainClassNames, href: url }, children));
    };
    return RvMenuItem;
}(Component));
//# sourceMappingURL=RvMenuItem.js.map

export { RvButton, RvContainer, RvHeading, RvMenu, RvMenuItem, RvNavbar, RvNavbarContainer, RvNavbarTitle };
//# sourceMappingURL=index.es.js.map
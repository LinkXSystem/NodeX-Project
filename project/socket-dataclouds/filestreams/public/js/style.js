/*--------------------------------------------
    描述 : 添加新的样式rule
    参数 : styleSheets索引
    代码 : var ss = new styleSheet(0);
--------------------------------------------*/
var styleSheet = function (n) {
    var ss;
    if (typeof n == "number") ss = document.styleSheets[n];
    this.sheet = ss;
    this.rules = ss.cssRules ? ss.cssRules : ss.rules;
};
/*--------------------------------------------
    描述 : 查找样式rule，成功返回index,否则返回-1
    参数 : n为rule名称
    代码 : var ss = new styleSheet(0);
          ss.indexOf("className")
--------------------------------------------*/
styleSheet.prototype.indexOf = function (selector) {
    for (var i = 0; i < this.rules.length; i++) {
        if (this.rules[i].selectorText == selector) {
            return i;
        }
    }
    return -1;
};
/*--------------------------------------------
    描述 : 删除样式rule
    参数 : n为rule索引或者名称
    代码 : var ss = new styleSheet(0);
          ss.removeRule(0) || ss.removeRule("className")
--------------------------------------------*/
styleSheet.prototype.removeRule = function (n) {
    if (typeof n == "number") {
        if (n < this.rules.length) {
            this.sheet.removeRule ? this.sheet.removeRule(n) : this.sheet.deleteRule(n);
        }
    } else {
        var i = this.indexOf(n);
        this.sheet.removeRule ? this.sheet.removeRule(i) : this.sheet.deleteRule(i);

    }
};
/*--------------------------------------------
    描述 : 添加新的样式rule
    参数 : selector      样式rule名称
          styles        样式rule的style
          n             位置
    代码 : var ss = new styleSheet(0);
          ss.addRule("className","color:red",0);
--------------------------------------------*/
styleSheet.prototype.addRule = function (selector, styles, n) {
    if (typeof n == "undefined") {
        n = this.rules.length;
    }
    this.sheet.insertRule ? this.sheet.insertRule(selector + "{" + styles + "}", n) : this.sheet.addRule(selector, styles, n);

};

/*--------------------------------------------
    描述 : 设置样式rule具体的属性
    参数 : selector      样式rule名称
          attribute     样式rule的属性
          _value        指定value值
    代码 : var ss = new styleSheet(0);
           ss.setRuleStyle("className","color:","green");
--------------------------------------------*/
styleSheet.prototype.setRuleStyle = function (selector, attribute, _value) {
    var i = this.indexOf(selector);
    this.rules[i].style[attribute] = _value;
};

/*--------------------------------------------
    描述 : 获得样式rule具体的属性
    参数 : selector      样式rule名称
          attribute      样式rule的属性
    代码 : var ss = new styleSheet(0);
          ss.getRuleStyle("className","color");
--------------------------------------------*/
styleSheet.prototype.getRuleStyle = function (selector, attribute) {
    var i = this.indexOf(selector);
    return this.rules[i].style[attribute];
};
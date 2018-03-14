/*!Butterfly !*/
var $ = jQuery.noConflict();
$(document).ready(function() {
  function t(t) {
   return t > 9 ? t : "0" + t
  }

  function e(t, e) {
   return new RegExp(" " + e + " ").test(" " + t.className + " ")
  }

  function n(t, n) {
   var i = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
   if (e(t, n)) {
    for (; i.indexOf(" " + n + " ") >= 0;) i = i.replace(" " + n + " ", " ");
    t.className = i.replace(/^\s+|\s+$/g, "")
   } else t.className += " " + n
  }
 }),
 function(t) {
  function e() {
   var t = document.createElement("div"),
    e = "";
   return "WebkitTransition" in t.style ? e = "-webkit-" : "MozTransition" in t.style && (e = "-moz-"), e
  }

  function n(e) {
   this.$elt = t('<div class="indBut n' + e + '"><div class="left wing"></div><div class="body"></div><div class="right wing"></div></div'), this.elt = this.$elt[0], this.$wings = this.$elt.find(".wing"), this.scale = .3 * Math.random() + .1, this.$wings.css("animation-duration", 2 * this.scale + "s"), this.x = Math.random() * t(document).width(), this.y = Math.random() * t(document).height(), this.vx = 10 * Math.random() - 5, this.vy = 10 * Math.random() - 5, this.l = 20 * this.scale, this.z = Math.round(-1 / this.scale * 2500), this.move()
  }

  function i() {
   for (var t = 0; t < o.length; t++) o[t].setDestination(a, r)
  }
  var o = (t("body"), []),
   a = t(document).width() / 2,
   r = t(document).height() / 2,
   s = e();
  n.prototype.move = function() {
   var t = Math.sqrt(this.vx * this.vx + this.vy * this.vy),
    e = this.vx / t,
    n = 180 * Math.acos(e) / Math.PI + 90,
    i = "perspective(4000px) translateZ(" + this.z + "px) ";
   this.vy < 0 && (n = 180 - n), i += "rotateZ(" + Math.round(n) + "deg)", this.x += this.vx, this.y += this.vy;
   var o = "";
   return o += s + "transform:" + i + ";", o += "left:" + Math.round(this.x) + "px;", o += "top:" + Math.round(this.y) + "px;", this.elt.style.cssText = o, this
  }, n.prototype.setDestination = function(t, e) {
   var n = t - this.x,
    i = e - this.y,
    o = Math.sqrt(n * n + i * i);
   return this.vx = this.vx + .4 * n / o, this.vy = this.vy + .4 * i / o, this.limit().move(), this
  }, n.prototype.limit = function() {
   var t = this.l;
   return this.vx > t ? this.vx = t : this.vx < -t && (this.vx = -t), this.vy > t ? this.vy = t : this.vy < -t && (this.vy = -t), this
  }, t(document).ready(function() {
   for (var e = t("#butterflycontainer"), s = 0; 6 > s; s++) {
    var c = new n(s % 4 + 1);
    e.append(c.$elt), o.push(c)
   }
   t(document).on("mousemove", function(t) {
    a = t.clientX, r = t.clientY
   }), t(document).on("click", function() {
    for (var t = 0; t < o.length; t++) o[t].vx = 40 - 80 * Math.random(), o[t].vy = 40 - 80 * Math.random()
   }), setInterval(function() {
    i()
   }, 40)
  })
 }(jQuery), jQuery(document).ready(function() {
 });


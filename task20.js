(function() {
	"use strict";
	function search() {
		this.inputInfo = document.getElementById('inputInfo');
		this.input = document.getElementById('input');
		this.searchInfo = document.getElementById('searchInfo');
		this.search = document.getElementById('search');
		this.canvas = document.getElementById('canvas');
	}
	search.prototype = {
		constructor: search,
		init: function() {
			this.bindEvent();
		},
		bindEvent: function() {
			var that = this;
			this.input.addEventListener('click', function() {
				that.renderInput();
			});
			this.search.addEventListener('click', function() {
				that.renderSearch();
			})
		},
		renderInput: function() {
			var inputInfo = this.inputInfo.value.split(/[\s,，\t、]+/g);
			if(inputInfo[0] === '' && inputInfo.length === 1) return false;
			for(let item in inputInfo) {
				let div = document.createElement('div');
				if (inputInfo[item] !== '') {
					div.innerHTML = inputInfo[item];
					this.canvas.appendChild(div);
				}
			}
		},
		renderSearch: function() {
			let canvas = this.canvas.children,
				searchInfo = this.searchInfo.value.trim();
				if (canvas.length < 1) return false;
				for (let i = 0, len = canvas.length; i < len; i++) {
					canvas[i].className = '';
					if(canvas[i].innerText.indexOf(searchInfo) != -1)
						canvas[i].className = 'haha';
				}
		}
	}
	var search = new search();
	search.init();
})()

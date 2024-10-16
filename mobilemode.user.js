// ==UserScript==
// @name     bitcointalk mobile
// @author   babo
// @version  1.2
// @namespace https://bitcointalk.org/
// @include https://bitcointalk.org/*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

  	var mobile = window.screen.width;
  	if (mobile < 400) {
      var meta = document.createElement('meta');
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(meta);
      
			window.addEventListener('load', function() {
        var css = `
        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }

        img {
          max-width: 98%;
        }

        .windowbg2 .smalltext br, .windowbg2 small br {
          display: none;
        }

        .windowbg2 .middletext {
          padding: 4px 0;
        }

        .windowbg, .windowbg2 {
          border: 1px solid #aaa;
          /*padding: 2px !important*/
        }

        .tborder .bordercolor .windowbg2 {
          border-top: none;
        }

        .windowbg p, .windowbg2 p, .windowbg3 p {
          margin: 2px 0;
        }

        .windowbg3 {
          border-bottom: 1px solid #ccc
        }

        table.titlebg2 {
          table-layout: fixed
        }

        .titlebg2 td {
          display: block;
          text-align: left;
        }

        #jumpto {
          max-width: 65%;
        }

        .poster_info, .td_headerandpost {
          width: 100%;
          display: block;
        }

        .avatar, .subject, .poster_info .smalltext br {
          display: none;
        }

        .poster_info {
          border-bottom: 1px solid #aaa;
          width: 98%;
        }

        .td_headerandpost {
          margin: 0 0 10px;
        }

        .bordercolor {
          table-layout: fixed
        }

        .bordercolor tr {
          width: 99%;
          display: block;
        }

        .bordercolor tr table {
          margin: 4px 0;
        }

        td {
          word-wrap: break-word !important
        }

        .tborder {
          border-bottom: 1px solid #696969 !important;
          max-width: 98%;
        }

        .navPages, span.prevnext a:link, td.windowbg small a:nth-last-child(2) {
          font-size: 125% !important;
          padding: 0 4px;
        }

        .navigationPages td {
          display: block;
          width: 98%;
        }

        #variousheadlinks {
          /* width: inherit; */
          padding: 4px;
          display: block;
          width: 98%;
        }

        #upshrinkHeaderIC .windowbg2 td:nth-child(2), #upshrinkHeaderIC .windowbg {
          display: none;
        }

        textarea.editor, input[name="subject"] {
          max-width: 98%;
          width: 100%;
        }

        .post, .personalmessage {
          overflow: hidden !important;
        }

        #upshrinkHeader2 .titlebg2 {
          display: block;
          width: 100%;
        }

        #topMenu {
          margin-left: 0 !important;
          width: 99%;
        }

        #topMenu td {
          float: left;
          margin: 1px 0;
          padding: 0 3px;
        }

        .maintab_active_first, .maintab_active_last, .maintab_first {
          display: none
        }

        #footerarea td:nth-child(odd) {
          display: none;
        }

        .catList td:nth-child(odd) {
          display: none;
        }

        #helpmain.windowbg2 {
          width: inherit !important
        }

        #searchform td {
          display: block
        }

        #searchform fieldset {
          width: auto
        }

        #searchform td:nth-child(3) b {
          display: none
        }

        #frmLogin table, #creator table {
          table-layout: fixed;
          width: 99%
        }

        #frmLogin td, #creator td {
          display: block;
          text-align: left
        }

        .topicList td {
          display: none
        }

        .catbg3:nth-child(2), .catList .catbg, .topicList .windowbg3:nth-child(3), .topicList .windowbg:nth-child(3) {
          display: inherit !important
        }

        .signature td {
          word-break: break-all;
        }

        #modifyProfile>td {
          display: block;
        }

        #modifyProfile>td, #modifyProfile>td>table {
          width: 99%;
        }

        #modifyProfile .titlebg td:nth-child(2), #modifyProfile .windowbg:nth-child(2) {
          display: none;
        }

        #modifyProfile br {
          display: inherit !important
        }

        #modifyProfile .smalltext {
          height: auto;
        }

        .newtxt {
          font-size: inherit !important
        }

        .dummyPost {
          display: none !important;
        }

        .maintab_last {
          display: none;
        }
        
        hr,
        table[cellpadding="3"] table[cellpadding="5"] td.smalltext[valign="bottom"][width="85%"],
        .bordercolor tbody tr td.windowbg2:nth-child(1),
        /* .bordercolor tbody tr td.windowbg2:nth-child(2), */
        .bordercolor tbody tr td.windowbg2:nth-child(4),
        .bordercolor tbody tr td.windowbg:nth-child(5),
        .bordercolor tbody tr td.windowbg:nth-child(6),
        .bordercolor tbody tr td.windowbg2:nth-child(7)
				{
        	display: none;
        }
        
        .windowbg,
        .windowbg2 {
        	border: 0;
        }
        
        table {
        	border-collapse: collapse;
				}
        
        .bordercolor tr table {
        	margin: 1px 0;
        }
        
        .bordercolor td.windowbg:has(img.avatar) {
        	display: none;
        }
        
        .msgcl1 { padding: 0; }
        .msgcl1 .windowbg,
        .msgcl1 .windowbg2 {
        	display: block !important;
        }
        .mirrortab_back, .mirrortab_back a {
        	color: transparent !important
        }
        .mirrortab_back a:nth-child(1) {
        	background: orange; color: white !important;
          padding: 10px;
        	border: 1px black solid;
			  	border-radius: 10px;
          position:fixed;
          bottom: 10px; left: 10px;
        }
        
        /*.tborder tr td:nth-child(2) {
          display: none;
        }*/

        .bordercolor { background-color: transparent !important; }
        .catbg3:nth-child(0),
        .catbg3:nth-child(2),
        .catbg3:nth-child(3),
        div.nav:nth-child(1),
        table.titlebg2,
        #footerarea,
        .titlebg2
        {
          display: none !important;
        }
        div.nav { margin: 0 !important; }
        table:has(td.maintab_back) {
        	width:100% !important;
          margin: 0 !important;
        }
        #bodyarea {
        	padding: 0 !important;
        }
    		`;

        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      
			}, false);
    }
})();

$('body').append(`
	<style>

		.my-essentials-home .widget-content {
			display: grid;
		    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		}

		.my-essentials-item {
		    display: inline-block;
		    width: auto !important;
		    float: none !important;
		    border: 0 !important;
		    text-align: center;
		    overflow: hidden !important;
		}

		.my-essentials-item>a {
		    display: inline-block !important;
		    width: 100%;
		    height: auto !important;
		    padding: 0 !important;
		    text-align: center  !important;
		    white-space: normal !important;
		    overflow: visible !important;
		    max-width: 120px;
		}


		.my-essentials-item>a>i {
		    width: auto !important;
		    text-align: center;
		    font-size: 14px !important;
		    line-height: 14px !important;
	        background: linear-gradient(#62b1c0,#3a8392);
	        color: white;
	        margin-top: 1em;
		    border-radius: 5px;
		}
		.my-essentials-item>a>span {
		    display: inline-block !important;
	        line-height: 1.3;
		    font-size: 14px;
		    color: black;
		    width: 100%;
		    vertical-align: top;
		}

		.my-essentials-item>a>i:before {
		    position: static !important;
		    margin: -0.15em !important;
		    padding: 0 !important;
		    height: auto !important;
		    font-size: 100px;
		    line-height: 1;
		}

		.my-essentials-item:nth-of-type(1)>a>i,.my-essentials-item:nth-of-type(6)>a>i {
	        background: linear-gradient(#aad26d,#799c52);
		}
		.my-essentials-item:nth-of-type(2)>a>i {
	        background: linear-gradient(#e3a255,#ef7f42);
		}
		.my-essentials-item:nth-of-type(3)>a>i {
	        background: linear-gradient(#62b1c0,#3a8392);
		}
		.my-essentials-item:nth-of-type(4)>a>i,.my-essentials-item:nth-of-type(9)>a>i {
	        background: linear-gradient(#9b759f,#6f4f72);
		}
		.my-essentials-item:nth-of-type(5)>a>i, .my-essentials-item:nth-of-type(7)>a>i {
	        background: linear-gradient(#de5343,#973637);
		}

		.notifications-banner-wrapper {
			display: none !important;
		}
		#content {
			margin-top: 75px !important;
		}
		.main-header-top {
			background-size: auto !important;
		}
		@media (min-width:1360px) {
			.main-header-top {
				background-size: 100% auto !important;
			}
		}
		#globalheader {
			display: none;
		}
		.main-header-top.top40 {
			top: 0 !important;
		}

	</style>
`);
var __icons = [
	'my-school-biz',
	'my-sap-new',
	'my-bridgit'
];
$('.my-essentials-home .my-generic-blank').each(function(){
	var icon = __icons.pop();
	if (icon) {
		$(this).removeClass('my-generic-blank').addClass(icon)
	}
});
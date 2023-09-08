import { css, Global } from '@emotion/react'

function Reset() {
  return <Global
        styles={css`
        /* Specify font-family */
        body {
          font-family: 'Times New Roman', Times, serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.3;
        }
        
        /* Set background color and font color */
        body {
          background-color: #1c1c1c;
          color: #ddd;
        }
        
        /* Set link styles */
        a {
          color: #bbb;
          text-decoration: none;
          border-bottom: 1px solid #bbb;
        }
        
        a:hover {
          color: #fff;
          border-color: #fff;
        }
        
        /* Set heading styles */
        h1, h2, h3 {
          font-weight: normal;
          margin-bottom: 0.5em;
          color: #fff;
        }
        
        h1 {
          font-size: 3em;
        }
        
        h2 {
          font-size: 2em;
        }
        
        h3 {
          font-size: 1.5em;
        }
        
        /* Set paragraph styles */
        p {
          line-height: 1.5;
          margin-bottom: 1em;
        }
        
        /* Set border styles for images */
        img {
          border: 2px solid #bbb;
        }
        
        /* Set styles for blockquotes */
        blockquote {
          border-left: 4px solid #ccc;
          padding-left: 1em;
          margin-left: 1em;
          font-style: italic;
          color: #bbb;
        }
        
        /* Set styles for code snippets */
        pre {
          background-color: #333;
          color: #fff;
          padding: 1em;
          overflow-x: scroll;
        }
        
        code {
          font-family: Consolas, 'Courier New', Courier, monospace;
        }
        
        /* Set button styles */
        button {
          background-color: #333;
          color: #fff;
          border: none;
          padding: 0.5em 1em;
          border-radius: 3px;
        }
        
        button:hover {
          cursor: pointer;
          background-color: #444;
        }
        
        /* Set form styles */
        input[type="text"], input[type="password"] {
          background-color: #333;
          color: #fff;
          border: none;
          padding: 0.5em;
        }
        
        input[type="submit"] {
          background-color: #333;
          color: #fff;
          border: none;
          padding: 0.5em 1em;
          border-radius: 3px;
        }
        
        input[type="submit"]:hover {
          cursor: pointer;
          background-color: #444;
        }
        
        /* Set table styles */
        table {
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 1em;
        }
        
        td, th {
          border: 1px solid #bbb;
          padding: 0.5em;
        }
        
        th {
          background-color: #666;
          color: #fff;
          text-align: left;
        }
        

            @font-face {
                font-family: Shabnam;
                src: url('./font/samim-font-v2.0.1/Samim.eot');
                src: url('./font/samim-font-v2.0.1/Samim.eot?#iefix')
                        format('embedded-opentype'),
                    url('./font/samim-font-v2.0.1/Samim.woff2') format('woff2'),
                    url('./font/samim-font-v2.0.1/Samim.woff') format('woff'),
                    url('./font/samim-font-v2.0.1/Samim.ttf') format('truetype');
                font-weight: normal;
            }

            @font-face {
                font-family: Samim;
                src: url('./font/samim-font-v2.0.1/Samim.eot');
                src: url('./font/samim-font-v2.0.1/Samim.eot?#iefix')
                        format('embedded-opentype'),
                    url('./font/samim-font-v2.0.1/Samim-Bold.woff2')
                        format('woff2'),
                    url('./font/samim-font-v2.0.1/Samim-Bold.woff')
                        format('woff'),
                    url('./font/samim-font-v2.0.1/Samim-Bold.ttf')
                        format('truetype');
                font-weight: bold;
            }

            html,
            body {
                font-family: Shabnam;
                
                font-size: 16px;
                font-weight: 400;
                line-height: 1.65;
                color: #222;
                font-size: 100%;
            }
            * {
                font-family: Shabnam;
                box-sizing: border-box;
                webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            direction: rtl;
            /////////
            .calendarContainer {
                border-radius: 3px;
                box-shadow: 0 3px 10px #dbdbdb;
                border: 1px solid #cccccc;
                width: 300px;
                margin: auto;
                text-align: center;
                padding: 10px;
                background-color: #fff;
            }

            .calendarContainer * {
                box-sizing: border-box;
            }

            .calendarContainer .dayPickerContainer:after,
            .calendarContainer .monthsList:after,
            .calendarContainer .daysOfWeek:after {
                content: '';
                display: block;
                clear: both;
            }

            /* Heading */
            .calendarContainer .heading {
                height: 42px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .calendarContainer .heading > button {
                border-radius: 3px;
                background: none;
                margin: 5px 0;
                border: 1px solid #f7f7f7;
                text-align: center;
                line-height: 30px;
                width: 36px;
                height: 32px;
                cursor: pointer;
            }

            .calendarContainer .heading > button:hover {
                background-color: #f2f2f2;
            }

            .calendarContainer .heading > span {
                line-height: 35px;
            }

            .calendarContainer .heading svg {
                width: 10px;
            }

            .calendarContainer .heading .prev {
                float: right;
            }

            .calendarContainer .heading .next {
                float: left;
            }

            .calendarContainer .heading .title {
                line-height: 32px;
                width: 120px;
                height: 32px;
                font-size: 1em;
                margin: 5px 0;
                border: 1px solid #f7f7f7;
                text-align: center;
                display: inline-block;
                font-weight: normal;
            }

            /* Day wrapper styles */
            .calendarContainer .dayWrapper {
                padding: 5;
                float: right;
                width: 14.28571429%;
            }

            /* Day wrapper button styles */
            .calendarContainer .dayWrapper button {
                border: none;
                background: none;
                outline: none;
                width: 100%;
                height: 36px;
                border-radius: 3px;
                cursor: pointer;
            }

            .calendarContainer .dayWrapper button:hover {
                background-color: #eeeeff;
            }

            .calendarContainer .dayWrapper button[disabled] {
                color: #aaa;
                cursor: not-allowed;
                background-color: #ebebeb;
            }

            .calendarContainer .dayWrapper button.selected {
                background-color: #337ab7;
                color: #ffffff;
            }

            .calendarContainer .dayWrapper:not(.currentMonth) button {
                opacity: 0.5;
            }

            /* Days of week row */
            .calendarContainer .daysOfWeek {
                border-bottom: 1px solid #eee;
                margin-bottom: 5px;
                padding-bottom: 5px;
                display: flex;
                width: 100%;
            }

            .calendarContainer .daysOfWeek > div {
                flex-grow: 1;
                justify-content: space-between;
            }

            /* Month selector portion */
            .calendarContainer .monthsList {
                clear: both;
                width: 100%;
            }

            .calendarContainer .monthsList button {
                width: 33.33333332%;
                height: 25%;
                float: right;
                border: 1px solid #f9f9f9;
                outline: none;
                font-size: 1em;
                background: #fff;
                padding: 10px 0;
                cursor: pointer;
            }

            .calendarContainer .monthsList button:hover {
                background: #eeeeee;
                cursor: pointer;
            }

            /* Selected state of buttons */
            .calendarContainer .selected button,
            .calendarContainer .selected button:hover,
            .calendarContainer .selected button:active,
            .calendarContainer .selected button:focus {
                background-color: #337ab7;
                color: #ffffff;
            }
            /////
            .JDatePicker {
                font-family: vazir !important;
                width: 300px;
                min-height: 210px;
                padding: 0 !important;
                position: absolute;
                background: #fff;
                border-radius: 2px !important;
                z-index: 11 !important;
                direction: rtl;
                background-color: #fff !important;
                border: 1px solid #ccc !important;
            }
            .days-titles {
                padding: 10px 0 !important;
                background: #16a085 !important;
                color: white !important;
            }
            .days-titles div {
                width: 14.28%;
                display: inline-block;
                font-size: 14px;
                font-weight: 300;
                text-align: center;
            }
            .JC-months {
                background: #1abc9c;
                padding: 15px 0;
                height: 45px;
                color: white;
                display: block !important;
            }
            .day-items {
                border-radius: 4px;
                padding: 5px 0 !important;
            }
            .JDheader {
                padding: 5px;
                height: 45px;
            }
            .JDatePicker .JC-months {
                position: relative;
                display: inline-block;
                width: 100%;
            }
            .JDatePicker .monthPicker {
                position: absolute;
                right: 0 !important;
                width: 100%;
                background: #fff;
                text-align: center;
                padding: 0 !important;
                border-radius: 5px;
                top: 30px !important;
                box-shadow: 0px 0px 7px -2px #000;
                z-index: 1;
            }
            .JDatePicker .month-items:hover,
            .JDatePicker {
                background: white !important;
                color: #454545 !important;
            }
            .selected {
                background-color: #1abc9c !important;
                color: white !important;
                border-radius: 4px !important;
            }
            .day-items:hover {
                background-color: #ccc !important;
            }
            .monthPicker {
                color: black !important;
            }
            .JDatePicker .month-items {
                width: 32.5%;
                float: right;
                text-align: center;
                cursor: pointer;
                padding: 4px 0px;
                border: 1px solid #ccc;
                font-size: 14px;
            }
            .JDatePicker .JC-months .prev,
            .JDatePicker .JC-months .next {
                float: right;
                width: 20%;
                text-align: center;
                transform: rotate(180deg);
                cursor: pointer;
            }
            .JDatePicker .JC-days {
                position: relative;
                display: inline-block;
                background: #f7f7f7;
            }
            .JDatePicker .JC-days .holder {
                line-height: 24px;
            }
            .JDatePicker .print-month {
                width: 60%;
                text-align: center;
                float: right;
                cursor: pointer;
            }
            .JDatePicker .day-items {
                width: 14.28%;
                float: right;
                text-align: center;
                cursor: pointer;
            }
            .JDheader .right {
                display: inline-block;
                width: 100% !important;
            }
            .JDatePicker .JDheader select {
                width: 94%;
                border: none;
                border-bottom: 1px solid;
                padding: 0 20%;
            }
            .JDatePicker .JDheader .left {
                text-align: center;
            }
            .JDatePicker .JDheader .right .number {
                width: 70%;
                direction: ltr;
                text-align: center;
                display: inline-block;
            }
            .JDatePicker .JDheader .right .number:hover {
                border: none !important;
                cursor: text !important;
            }
            .JDatePicker .JDheader .right input[type=\\'tel\\'] {
                width: 40%;
                z-index: 2;
                direction: ltr;
                text-align: center;
                display: inline-block;
                top: 8px;
                position: absolute;
            }
            .JDatePicker .JC-tooltip {
                position: absolute;
                background: #d9d9d9;
                z-index: 1;
                padding: 0px 10px;
            }
            .JDatePicker button {
                border: none;
                color: #fff;
                font-size: 16px;
                margin: 0 10px;
                width: 40px;
                height: 26px;
                border-radius: 5px;
            }
            .JDatePicker .JDsubmit {
                background: #7fc6ff;
            }
            .jdtrp > div {
                display: initial;
                margin: 0 6px;
            }
            .avan-persian-datepicker:focus {
                border-top: none;
                border-right: none;
                border-left: none;
                border-bottom: 2px solid #ea6c41 !important;
                transition: 0.4s;
            }
            .avan-persian-datepicker {
                border-top: none !important;
                outline: none !important;
                border-right: none !important;
                border-left: none !important;
                border-radius: 0 !important;
                border-bottom: 2px solid #ccc !important;
                transition: 0.4s;
            }
            .converter {
                padding: 5px 10px;
            }
            .gr-converter-input {
                width: 40%;
            }
            .jl {
                background-color: #ccc;
                border-radius: 10px;
            }
            .converter-btn {
                width: 10% !important;
                padding: 2px 0 0 0 !important;
                height: 10% !important;
            }
        `}
    />
}

export default Reset

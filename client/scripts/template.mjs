
const spinner =
    '                       <svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">' +
    '\n' +
    '                               <path fill="#39B54A" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">' +
    '\n' +
    '                                   <animateTransform' +
    '\n' +
    '                                   attributeName="transform"' +
    '\n' +
    '                                   attributeType="XML"' +
    '\n' +
    '                                   type="rotate"' +
    '\n' +
    '                                   dur="1s"' +
    '\n' +
    '                                   from="0 50 50"' +
    '\n' +
    '                                   to="360 50 50"' +
    '\n' +
    '                                   repeatCount="indefinite" />' +
    '\n' +
    '                               </path>' +
    '\n' +
    '                           </svg>';

const loader =
    '<style>' +
    '\n' +
    '               .temp-container {' +
    '\n' +
    '                   height: 90vh;' +
    '\n' +
    '                   display: flex;' +
    '\n' +
    '                   justify-content: center;' +
    '\n' +
    '                   align-items: center;' +
    '\n' +
    '               }' +
    '\n' +
    '               .temp-flex {' +
    '\n' +
    '                   display: flex;' +
    '\n' +
    '                   flex-direction: row;' +
    '\n' +
    '               }' +
    '\n' +
    '               .temp-wapper {' +
    '\n' +
    '                   display: flex;' +
    '\n' +
    '                   justify-content: center;' +
    '\n' +
    '                   margin-top: 20px;' +
    '\n' +
    '               }' +
    '\n' +
    '           </style>' +
    '\n' +
    '               <div class="temp-container">' +
    '\n' +
    '                   <div class="temp-flex">' +
    '\n' +
    '                       <div class="temp-wapper">' +
    '\n' +
    '    ' +
    spinner +
    '\n' +
    '                       </div>' +
    '\n' +
    '                   </div>' +
    '\n' +
    '               </div>';

const getpageTemplate = (pageTitle, bundleFileName, cssfileName) => {
    return (
        '<!DOCTYPE html>' +
        '\n' +
        '<html lang="en">' +
        '\n' +
        '   <head>' +
        '\n' +
        '       <meta charset="UTF-8">' +
        '\n' +
        '       <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '\n' +
        `       <link href="/${cssfileName}" rel="stylesheet">` +
        '\n' +
        '       <title>' +
        pageTitle +
        '</title>' +
        '\n' +
        '   </head>' +
        '\n' +
        '   <body>' +
        '\n' +
        '       <div id="root">' +
        '\n' +
        '           ' +
        loader +
        '\n' +
        '           <noscript>JavaScript is required.</noscript>' +
        '\n' +
        '       </div>' +
        '\n' +
        `       <script type="module" src="/${bundleFileName}"></script>` +
        '\n' +
        '   </body>' +
        '\n' +
        '</html>'
    );
};

export default getpageTemplate;

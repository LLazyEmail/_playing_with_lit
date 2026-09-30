/** Mailchimp-style email styles. */
export const MAILCHIMP_STYLES = `
    html { width: 100%; }
    body {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-weight: 100;
      width: 100% !important;
      margin: 0;
      padding: 0;
      color: #30363d;
      background-color: #efefef;
      -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
    }
    body > table { background-color: #eeeeee; }
    img {
      display: block!important;
      width: 100%!important;
      max-width: 600px !important;
      height: auto!important;
      margin: 0;
      padding: 0;
      text-decoration: none;
      border: 0;
      outline: none;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-weight: bold;
      color: #30363d;
    }
    p,ul,ol,small {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-weight: 100;
      text-align: left;
      color: #30363d;
    }
    a { color: #006dc7; }
    table td { border-collapse: collapse; }
    table { table-layout: fixed; }
    table table table { table-layout: auto; }
    #outlook a { padding: 0; color: #fff!important; }
    .preheader { font-size: 12px; margin: 0; padding: 10px 20px; color: #79818a; border: 0; }
    .preheader p,.preheader a { font-size: 12px; }
    .branding { padding: 20px 20px; background-color: #30363d; }
    .brandname { font-size: 25px; color: #fff; }
    .nav-links { padding-top: 5px; color: #ffffff; }
    .nav-link {
      font-size: 12px;
      display: inline-block;
      margin: 0;
      margin-left: 15px;
      padding: 0;
      color: #fff!important;
    }
    .full_width,.full_wrapper { max-width: 600px; }
    .full_width_text { padding: 15px 20px 25px 20px; background-color: #ffffff!important; }
    .full_width_image { max-width: 600px; margin: 0!important; padding: 0!important; border: 0; }
    .branding .mb_hide,.branding .mb_hide a { color: #ffffff; }
    .btn {
      font-size: 16px;
      font-weight: 100;
      line-height: 44px;
      display: inline-block;
      width: 200px;
      text-align: center;
      text-decoration: none;
      color: #fff;
      border: 0;
      border-radius: 2px;
      background-color: #006dc7;
      -webkit-text-size-adjust: none;
    }
    .btn-col { width: 100px!important; margin: 0; padding: 0; border: 0; }
    .product-row {
      max-width: 600px;
      margin: 0!important;
      padding: 0!important;
      border-collapse: collapse;
      border: 0;
    }
    .product-col { margin: 0; padding: 0 2%; border: 0; }
    .product-outer { width: 46%; margin-right: 2%; margin-left: 2%; }
    .space { width: 100%; height: 15px; background: #f5f5f5; }
    .product-image { width: 100%!important; margin: 0; padding: 0; border: 0; }
    .product-inner { margin: 0; padding: 20px; border: 0; background-color: #ffffff; box-shadow: 0 0 2px #e6e6e6; }
    .product .meta {
      font-size: 11px;
      font-weight: 100;
      display: block;
      width: 100%;
      margin: 0;
      margin-bottom: 5px;
      padding: 0;
      color: #a9adb7;
    }
    .product .price { font-size: 17px; font-weight: 700; display: block; color: #30363d; margin: 0; padding: 0; }
    .product h2 { font-size: 24px; font-weight: 400; margin: 0; margin-bottom: 10px; padding: 0; color: #30363d; }
    .product p { font-size: 15px; font-weight: 100; margin: 0; margin-bottom: 15px; padding: 0; color: #30363d; }
    .product small { font-size: 12px; font-weight: 100; display: block; margin-top: 0; text-decoration: line-through; color: #a9adb7; }
    .product .prices { width: 190px!important; margin: 0; padding: 0; border: 0; }
    .product-button {
      font-size: 16px;
      font-weight: 100;
      line-height: 44px;
      display: inline-block;
      width: 100px;
      text-align: center;
      text-decoration: none;
      color: #fff;
      border: 0;
      border-radius: 2px;
      background-color: #006dc7;
      -webkit-text-size-adjust: none;
    }
    .footer { margin: 0; padding: 0; text-align: left; }
    .footer-inner { padding: 20px 20px; background-color: #30363d; }
    @media only screen and (min-width: 599px) {
      .footer-col-first { padding-right: 20px; }
      .footer-col-second { padding-left: 10px; padding-right: 10px; }
      .footer-col-last { padding-left: 20px; }
    }
    .footer h3 { font-size: 13px; font-weight: 400; margin: 0; margin-bottom: 10px; padding: 0; color: #fff; text-align: left; }
    .footer p { font-size: 12px; font-weight: 100; margin: 0; padding: 0; color: #fff; text-align: left; }
    .disclaimer { padding: 30px 20px 20px 20px; text-align: left; }
    .disclaimer h5 { font-size: 14px; font-weight: 100; margin: 0; margin-bottom: 20px; padding: 0; color: #30363d; text-align: left; }
    .disclaimer p { font-size: 11px; font-weight: 100; margin: 0; margin-bottom: 10px; padding: 0; color: #a9adb7; text-align: left; }
    @media only screen and (max-width: 700px) {
      table[class='full_width'],table[class='table-inner'] { width: 96% !important; max-width: 600px!important; }
      table[class='full_wrapper'] { width: 100% !important; max-width: 600px!important; }
    }
    @media only screen and (max-width: 599px) {
      table[class='table-full'],table[class='product-outer'] { width: 96% !important; margin: 0 2% 0 2%!important; }
      *[class='mb_hide'] { display: none !important; }
    }
`;

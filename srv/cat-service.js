const cds = require('@sap/cds');
const xsenv = require("@sap/xsenv");

class CatalogService extends cds.ApplicationService {
    init() {

        xsenv.loadEnv();

        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // Get User                                                                         //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        
        this.on('getUser',  async (req) => {  
            return  {
                id : req.user.id,
                _roles: req.user._roles,
                attr : {         
                    email: req.user.attr.email,
                    familyName: req.user.attr.familyName,
                    givenName: req.user.attr.givenName,
                    logonName: req.user.attr.logonName,
                }
            }
    
      
        }); 

        
        return super.init();
    }
}

module.exports = { CatalogService };

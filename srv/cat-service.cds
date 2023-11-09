

@protocol: ['odata']
service CatalogService  @( requires: ['sbpa_call', 'authenticated-user', 'system-user']) {
    

 
    type user {
        id : String;
        attr : {         
            email: String;
            familyName: String;
            givenName: String;
            logonName: String;
        }
    };
    

    function getUser() returns user;

}

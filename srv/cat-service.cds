

@protocol: ['odata']
service CatalogService  @( requires: ['sbpa_call', 'authenticated-user', 'system-user']) {
 
 
    type user {
    };

    function getUser( ) returns user;

}

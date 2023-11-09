

@protocol: ['odata']
service CatalogService @( requires:'authenticated-user') {
 
 
    type user {
    };

    function getUser( ) returns user;

}

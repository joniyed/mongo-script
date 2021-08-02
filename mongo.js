
print('\n\n===================================================================')
print('                          DB setup started                             ')
print('===================================================================\n\n')

print('\n\n===================================================================')
print('                      Use Oushodsheba Database                         ')
print('===================================================================\n\n')


var pharmacyId = 15;
var userId = 0;

use oushodsheba_pharmacy;

var index = 1;
db.accounts.find().forEach(function (myDoc) {
    var localId = pharmacyId + "_" + userId + "_" + new Date().getTime() + "" + index;
    print("name: " + myDoc.name);
    db.getCollection('accounts').update(
        { _id: myDoc._id },
        {
            $set:
            {
                "pharmacyId": pharmacyId,
                "localId": localId
            }
        }, false, true);
    index++;
});

index = 1;
db.products.find().forEach(function (myDoc) {
    var localId = pharmacyId + "_" + userId + "_" + new Date().getTime() + "" + index;
    print("name: " + myDoc.productName);
    db.getCollection('products').update(
        { _id: myDoc._id },
        {
            $set:
            {
                "pharmacyId": pharmacyId,
                "localId": localId
            }
        }, false, true);
    index++;
});


print('\n\n===================================================================')
print('                           Setup Completed                             ')
print('===================================================================\n\n')
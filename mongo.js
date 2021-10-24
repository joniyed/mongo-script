
print('\n\n===================================================================')
print('                          DB setup started                             ')
print('===================================================================\n\n')

print('\n\n===================================================================')
print('                      Use Oushodsheba Database                         ')
print('===================================================================\n\n')


var pharmacyId = 38;
var userId = 1;

use oushodsheba_pharmacy_offline;

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
                "localId": localId,
                "createdAt": new Date()
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
                "localId": localId,
                "createdAt": new Date(),
                "syncedAt": new Date()
            }
        }, false, true);
    index++;
});


print('\n\n===================================================================')
print('                           Setup Completed                             ')
print('===================================================================\n\n')

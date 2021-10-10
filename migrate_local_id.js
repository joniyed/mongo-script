
print('\n\n===================================================================')
print('                          DB setup started                             ')
print('===================================================================\n\n')

print('\n\n===================================================================')
print('                      Use Oushodsheba Database                         ')
print('===================================================================\n\n')


var pharmacyId = 39;
var userId = 1;

use oushodsheba_pharmacy;

index = 1;
db.inventories.find().forEach(function (myDoc) {
    var localId = pharmacyId + "_" + userId + "_" + myDoc.createdAt.getTime() + "" + index;
    print(myDoc.inventoryNumber)
    db.getCollection('inventories').update(
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

db.inventories.find({createdAt:{$lt:new Date("2021-10-03T00:00:00.000Z")}}).forEach(function (myDoc) {
    db.getCollection('inventories').update(
        { _id: myDoc._id },
        {
            $set:
            {
                "pharmacyId": pharmacyId,
                "createdAt": new Date("2021-10-03T00:00:00.000Z")
            }
        }, false, true);
});

db.products.find().forEach(function (myDoc) {
    print("name: " + myDoc.productName);
    db.getCollection('products').update(
        { _id: myDoc._id },
        {
            $set:
            {
                "pharmacyId": pharmacyId,
                "createdAt": new Date("2021-10-03T00:00:00.000Z")
            }
        }, false, true);
});

print('\n\n===================================================================')
print('                           Setup Completed                             ')
print('===================================================================\n\n')

//show dbs;

use oushodsheba_pharmacy;

// db.vendors.updateMany({ "pharmacyId": 0 }, { $set: { "pharmacyId": 14 } });

var i = 1;

while (i < 200) {

    if (i != 0) {
        db.accounts.deleteMany({ pharmacyId: i });
        db.configurations.deleteMany({});
        db.customerPayments.deleteMany({ pharmacyId: i });
        db.customers.deleteMany({ pharmacyId: i });
        db.expenses.deleteMany({ pharmacyId: i });
        db.inventories.deleteMany({ pharmacyId: i });
        db.inventoryEntries.deleteMany({ pharmacyId: i });
        db.journals.deleteMany({ pharmacyId: i });
        db.journalEntries.deleteMany({ pharmacyId: i });
        db.pharmacyUserTransactions.deleteMany({ pharmacyId: i });
        db.pharmacyUsers.deleteMany({ pharmacyId: i });
        db.products.deleteMany({ pharmacyId: i });
        db.reconciliations.deleteMany({ pharmacyId: i });
        db.requisitions.deleteMany({ pharmacyId: i });
        db.sales.deleteMany({ pharmacyId: i });
        db.vendorPayments.deleteMany({ pharmacyId: i });
        db.vendors.deleteMany({ pharmacyId: i });
        db.numberSequences.deleteMany({});
        db.offline_configs.deleteMany({});
        db.syncRecords.deleteMany({}); 
    }
    i++;
}

db.accounts.updateMany({ "pharmacyId": 15 }, { $set: { "pharmacyId": 0 } })
db.products.updateMany({ "pharmacyId": 15 }, { $set: { "pharmacyId": 0 } })

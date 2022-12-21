export const DBConfig = {
    name: 'PetData',
    version: 1,
    objectStoresMeta: [
      {
        store: 'AdoptPetUser',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'pettype', keypath: 'pettype', options: { unique: false } },
          { name: 'breed', keypath: 'breed', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'email', keypath: 'email', options: { unique: false } },
          { name: 'phone', keypath: 'phone', options: { unique: false } }
        ]
      },
      {
        store: 'GivePetUser',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'pettype', keypath: 'pettype', options: { unique: false } },
          { name: 'breed', keypath: 'breed', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'email', keypath: 'email', options: { unique: false } },
          { name: 'phone', keypath: 'phone', options: { unique: false } }
        ]
      }
    ]
  };
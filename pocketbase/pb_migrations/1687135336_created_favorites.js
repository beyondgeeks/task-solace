migrate(
  (db) => {
    const collection = new Collection({
      id: "wh07ysxjtwib716",
      created: "2023-06-19 00:42:16.168Z",
      updated: "2023-06-19 00:42:16.168Z",
      name: "favorites",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "bfbjqd4i",
          name: "mal_id",
          type: "number",
          required: true,
          unique: false,
          options: {
            min: null,
            max: null,
          },
        },
        {
          system: false,
          id: "nbulnsue",
          name: "title",
          type: "text",
          required: true,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
        {
          system: false,
          id: "dgjfhbbw",
          name: "image",
          type: "text",
          required: true,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
      ],
      indexes: [],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("wh07ysxjtwib716");

    return dao.deleteCollection(collection);
  }
);

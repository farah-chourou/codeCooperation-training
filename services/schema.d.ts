export interface paths {
  "/pet": {
    /**
     * Update an existing pet
     * @description Update an existing pet by Id
     */
    put: operations["updatePet"];
    /**
     * Add a new pet to the store
     * @description Add a new pet to the store
     */
    post: operations["addPet"];
  };
  "/pet/findByStatus": {
    /**
     * Finds Pets by status
     * @description Multiple status values can be provided with comma separated strings
     */
    get: operations["findPetsByStatus"];
  };
  "/pet/findByTags": {
    /**
     * Finds Pets by tags
     * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     */
    get: operations["findPetsByTags"];
  };
  "/pet/{petId}": {
    /**
     * Find pet by ID
     * @description Returns a single pet
     */
    get: operations["getPetById"];
    /** Updates a pet in the store with form data */
    post: operations["updatePetWithForm"];
    /** Deletes a pet */
    delete: operations["deletePet"];
  };
  "/pet/{petId}/uploadImage": {
    /** uploads an image */
    post: operations["uploadFile"];
  };
  "/store/inventory": {
    /**
     * Returns pet inventories by status
     * @description Returns a map of status codes to quantities
     */
    get: operations["getInventory"];
  };
  "/store/order": {
    /**
     * Place an order for a pet
     * @description Place a new order in the store
     */
    post: operations["placeOrder"];
  };
  "/store/order/{orderId}": {
    /**
     * Find purchase order by ID
     * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     */
    get: operations["getOrderById"];
    /**
     * Delete purchase order by ID
     * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     */
    delete: operations["deleteOrder"];
  };
  "/user": {
    /**
     * Create user
     * @description This can only be done by the logged in user.
     */
    post: operations["createUser"];
  };
  "/user/createWithList": {
    /**
     * Creates list of users with given input array
     * @description Creates list of users with given input array
     */
    post: operations["createUsersWithListInput"];
  };
  "/user/login": {
    /** Logs user into the system */
    get: operations["loginUser"];
  };
  "/user/logout": {
    /** Logs out current logged in user session */
    get: operations["logoutUser"];
  };
  "/user/{username}": {
    /** Get user by user name */
    get: operations["getUserByName"];
    /**
     * Update user
     * @description This can only be done by the logged in user.
     */
    put: operations["updateUser"];
    /**
     * Delete user
     * @description This can only be done by the logged in user.
     */
    delete: operations["deleteUser"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Order: {
      /**
       * Format: int64
       * @example 10
       */
      id?: number;
      /**
       * Format: int64
       * @example 198772
       */
      petId?: number;
      /**
       * Format: int32
       * @example 7
       */
      quantity?: number;
      /** Format: date-time */
      shipDate?: string;
      /**
       * @description Order Status
       * @example approved
       * @enum {string}
       */
      status?: "placed" | "approved" | "delivered";
      complete?: boolean;
    };
    Customer: {
      /**
       * Format: int64
       * @example 100000
       */
      id?: number;
      /** @example fehguy */
      username?: string;
      address?: components["schemas"]["Address"][];
    };
    Address: {
      /** @example 437 Lytton */
      street?: string;
      /** @example Palo Alto */
      city?: string;
      /** @example CA */
      state?: string;
      /** @example 94301 */
      zip?: string;
    };
    Category: {
      /**
       * Format: int64
       * @example 1
       */
      id?: number;
      /** @example Dogs */
      name?: string;
    };
    User: {
      /**
       * Format: int64
       * @example 10
       */
      id?: number;
      /** @example theUser */
      username?: string;
      /** @example John */
      firstName?: string;
      /** @example James */
      lastName?: string;
      /** @example john@email.com */
      email?: string;
      /** @example 12345 */
      password?: string;
      /** @example 12345 */
      phone?: string;
      /**
       * Format: int32
       * @description User Status
       * @example 1
       */
      userStatus?: number;
    };
    Tag: {
      /** Format: int64 */
      id?: number;
      name?: string;
    };
    Pet: {
      /**
       * Format: int64
       * @example 10
       */
      id?: number;
      /** @example doggie */
      name: string;
      category?: components["schemas"]["Category"];
      photoUrls: string[];
      tags?: components["schemas"]["Tag"][];
      /**
       * @description pet status in the store
       * @enum {string}
       */
      status?: "available" | "pending" | "sold";
    };
    ApiResponse: {
      /** Format: int32 */
      code?: number;
      type?: string;
      message?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: {
    /** @description Pet object that needs to be added to the store */
    Pet?: {
      content: {
        "application/json": components["schemas"]["Pet"];
        "application/xml": components["schemas"]["Pet"];
      };
    };
    /** @description List of user object */
    UserArray?: {
      content: {
        "application/json": components["schemas"]["User"][];
      };
    };
  };
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /**
   * Update an existing pet
   * @description Update an existing pet by Id
   */
  updatePet: {
    /** @description Update an existent pet in the store */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Pet"];
        "application/xml": components["schemas"]["Pet"];
        "application/x-www-form-urlencoded": components["schemas"]["Pet"];
      };
    };
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"];
          "application/json": components["schemas"]["Pet"];
        };
      };
      /** @description Invalid ID supplied */
      400: {
        content: never;
      };
      /** @description Pet not found */
      404: {
        content: never;
      };
      /** @description Validation exception */
      405: {
        content: never;
      };
    };
  };
  /**
   * Add a new pet to the store
   * @description Add a new pet to the store
   */
  addPet: {
    /** @description Create a new pet in the store */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Pet"];
        "application/xml": components["schemas"]["Pet"];
        "application/x-www-form-urlencoded": components["schemas"]["Pet"];
      };
    };
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"];
          "application/json": components["schemas"]["Pet"];
        };
      };
      /** @description Invalid input */
      405: {
        content: never;
      };
    };
  };
  /**
   * Finds Pets by status
   * @description Multiple status values can be provided with comma separated strings
   */
  findPetsByStatus: {
    parameters: {
      query?: {
        /** @description Status values that need to be considered for filter */
        status?: "available" | "pending" | "sold";
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"][];
          "application/json": components["schemas"]["Pet"][];
        };
      };
      /** @description Invalid status value */
      400: {
        content: never;
      };
    };
  };
  /**
   * Finds Pets by tags
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  findPetsByTags: {
    parameters: {
      query?: {
        /** @description Tags to filter by */
        tags?: string[];
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"][];
          "application/json": components["schemas"]["Pet"][];
        };
      };
      /** @description Invalid tag value */
      400: {
        content: never;
      };
    };
  };
  /**
   * Find pet by ID
   * @description Returns a single pet
   */
  getPetById: {
    parameters: {
      path: {
        /** @description ID of pet to return */
        petId: number;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"];
          "application/json": components["schemas"]["Pet"];
        };
      };
      /** @description Invalid ID supplied */
      400: {
        content: never;
      };
      /** @description Pet not found */
      404: {
        content: never;
      };
    };
  };
  /** Updates a pet in the store with form data */
  updatePetWithForm: {
    parameters: {
      query?: {
        /** @description Name of pet that needs to be updated */
        name?: string;
        /** @description Status of pet that needs to be updated */
        status?: string;
      };
      path: {
        /** @description ID of pet that needs to be updated */
        petId: number;
      };
    };
    responses: {
      /** @description Invalid input */
      405: {
        content: never;
      };
    };
  };
  /** Deletes a pet */
  deletePet: {
    parameters: {
      header?: {
        api_key?: string;
      };
      path: {
        /** @description Pet id to delete */
        petId: number;
      };
    };
    responses: {
      /** @description Invalid pet value */
      400: {
        content: never;
      };
    };
  };
  /** uploads an image */
  uploadFile: {
    parameters: {
      query?: {
        /** @description Additional Metadata */
        additionalMetadata?: string;
      };
      path: {
        /** @description ID of pet to update */
        petId: number;
      };
    };
    requestBody?: {
      content: {
        "application/octet-stream": string;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["ApiResponse"];
        };
      };
    };
  };
  /**
   * Returns pet inventories by status
   * @description Returns a map of status codes to quantities
   */
  getInventory: {
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": {
            [key: string]: number;
          };
        };
      };
    };
  };
  /**
   * Place an order for a pet
   * @description Place a new order in the store
   */
  placeOrder: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Order"];
        "application/xml": components["schemas"]["Order"];
        "application/x-www-form-urlencoded": components["schemas"]["Order"];
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
      /** @description Invalid input */
      405: {
        content: never;
      };
    };
  };
  /**
   * Find purchase order by ID
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  getOrderById: {
    parameters: {
      path: {
        /** @description ID of order that needs to be fetched */
        orderId: number;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Order"];
          "application/json": components["schemas"]["Order"];
        };
      };
      /** @description Invalid ID supplied */
      400: {
        content: never;
      };
      /** @description Order not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Delete purchase order by ID
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  deleteOrder: {
    parameters: {
      path: {
        /** @description ID of the order that needs to be deleted */
        orderId: number;
      };
    };
    responses: {
      /** @description Invalid ID supplied */
      400: {
        content: never;
      };
      /** @description Order not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Create user
   * @description This can only be done by the logged in user.
   */
  createUser: {
    /** @description Created user object */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["User"];
        "application/xml": components["schemas"]["User"];
        "application/x-www-form-urlencoded": components["schemas"]["User"];
      };
    };
    responses: {
      /** @description successful operation */
      default: {
        content: {
          "application/json": components["schemas"]["User"];
          "application/xml": components["schemas"]["User"];
        };
      };
    };
  };
  /**
   * Creates list of users with given input array
   * @description Creates list of users with given input array
   */
  createUsersWithListInput: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["User"][];
      };
    };
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["User"];
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description successful operation */
      default: {
        content: never;
      };
    };
  };
  /** Logs user into the system */
  loginUser: {
    parameters: {
      query?: {
        /** @description The user name for login */
        username?: string;
        /** @description The password for login in clear text */
        password?: string;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        headers: {
          /** @description calls per hour allowed by the user */
          "X-Rate-Limit"?: number;
          /** @description date in UTC when token expires */
          "X-Expires-After"?: string;
        };
        content: {
          "application/xml": string;
          "application/json": string;
        };
      };
      /** @description Invalid username/password supplied */
      400: {
        content: never;
      };
    };
  };
  /** Logs out current logged in user session */
  logoutUser: {
    responses: {
      /** @description successful operation */
      default: {
        content: never;
      };
    };
  };
  /** Get user by user name */
  getUserByName: {
    parameters: {
      path: {
        /** @description The name that needs to be fetched. Use user1 for testing. */
        username: string;
      };
    };
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["User"];
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Invalid username supplied */
      400: {
        content: never;
      };
      /** @description User not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Update user
   * @description This can only be done by the logged in user.
   */
  updateUser: {
    parameters: {
      path: {
        /** @description name that need to be deleted */
        username: string;
      };
    };
    /** @description Update an existent user in the store */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["User"];
        "application/xml": components["schemas"]["User"];
        "application/x-www-form-urlencoded": components["schemas"]["User"];
      };
    };
    responses: {
      /** @description successful operation */
      default: {
        content: never;
      };
    };
  };
  /**
   * Delete user
   * @description This can only be done by the logged in user.
   */
  deleteUser: {
    parameters: {
      path: {
        /** @description The name that needs to be deleted */
        username: string;
      };
    };
    responses: {
      /** @description Invalid username supplied */
      400: {
        content: never;
      };
      /** @description User not found */
      404: {
        content: never;
      };
    };
  };
}
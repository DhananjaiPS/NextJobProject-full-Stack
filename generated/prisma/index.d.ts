
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model opening
 * 
 */
export type opening = $Result.DefaultSelection<Prisma.$openingPayload>
/**
 * Model save
 * 
 */
export type save = $Result.DefaultSelection<Prisma.$savePayload>
/**
 * Model job
 * 
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model application
 * 
 */
export type application = $Result.DefaultSelection<Prisma.$applicationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opening`: Exposes CRUD operations for the **opening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Openings
    * const openings = await prisma.opening.findMany()
    * ```
    */
  get opening(): Prisma.openingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.save`: Exposes CRUD operations for the **save** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saves
    * const saves = await prisma.save.findMany()
    * ```
    */
  get save(): Prisma.saveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.jobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.applicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    company: 'company',
    opening: 'opening',
    save: 'save',
    job: 'job',
    review: 'review',
    application: 'application'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "opening" | "save" | "job" | "review" | "application"
      txIsolationLevel: never
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.userFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.userAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.companyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.companyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      opening: {
        payload: Prisma.$openingPayload<ExtArgs>
        fields: Prisma.openingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.openingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.openingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>
          }
          findFirst: {
            args: Prisma.openingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.openingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>
          }
          findMany: {
            args: Prisma.openingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>[]
          }
          create: {
            args: Prisma.openingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>
          }
          createMany: {
            args: Prisma.openingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.openingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>
          }
          update: {
            args: Prisma.openingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>
          }
          deleteMany: {
            args: Prisma.openingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.openingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.openingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$openingPayload>
          }
          aggregate: {
            args: Prisma.OpeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpening>
          }
          groupBy: {
            args: Prisma.openingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpeningGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.openingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.openingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.openingCountArgs<ExtArgs>
            result: $Utils.Optional<OpeningCountAggregateOutputType> | number
          }
        }
      }
      save: {
        payload: Prisma.$savePayload<ExtArgs>
        fields: Prisma.saveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>
          }
          findFirst: {
            args: Prisma.saveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>
          }
          findMany: {
            args: Prisma.saveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>[]
          }
          create: {
            args: Prisma.saveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>
          }
          createMany: {
            args: Prisma.saveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.saveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>
          }
          update: {
            args: Prisma.saveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>
          }
          deleteMany: {
            args: Prisma.saveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.saveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePayload>
          }
          aggregate: {
            args: Prisma.SaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSave>
          }
          groupBy: {
            args: Prisma.saveGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaveGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.saveFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.saveAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.saveCountArgs<ExtArgs>
            result: $Utils.Optional<SaveCountAggregateOutputType> | number
          }
        }
      }
      job: {
        payload: Prisma.$jobPayload<ExtArgs>
        fields: Prisma.jobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.jobFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.jobAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.jobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.reviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.reviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      application: {
        payload: Prisma.$applicationPayload<ExtArgs>
        fields: Prisma.applicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          findFirst: {
            args: Prisma.applicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          findMany: {
            args: Prisma.applicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[]
          }
          create: {
            args: Prisma.applicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          createMany: {
            args: Prisma.applicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.applicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          update: {
            args: Prisma.applicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          deleteMany: {
            args: Prisma.applicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.applicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.applicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.applicationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.applicationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.applicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    company?: companyOmit
    opening?: openingOmit
    save?: saveOmit
    job?: jobOmit
    review?: reviewOmit
    application?: applicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    review: number
    application: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | UserCountOutputTypeCountReviewArgs
    application?: boolean | UserCountOutputTypeCountApplicationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    jobs: number
    save: number
    review: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | CompanyCountOutputTypeCountJobsArgs
    save?: boolean | CompanyCountOutputTypeCountSaveArgs
    review?: boolean | CompanyCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: openingWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saveWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type OpeningCountOutputType
   */

  export type OpeningCountOutputType = {
    application: number
  }

  export type OpeningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | OpeningCountOutputTypeCountApplicationArgs
  }

  // Custom InputTypes
  /**
   * OpeningCountOutputType without action
   */
  export type OpeningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningCountOutputType
     */
    select?: OpeningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpeningCountOutputType without action
   */
  export type OpeningCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
  }


  /**
   * Count Type SaveCountOutputType
   */

  export type SaveCountOutputType = {
    application: number
  }

  export type SaveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | SaveCountOutputTypeCountApplicationArgs
  }

  // Custom InputTypes
  /**
   * SaveCountOutputType without action
   */
  export type SaveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveCountOutputType
     */
    select?: SaveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaveCountOutputType without action
   */
  export type SaveCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    review?: boolean | user$reviewArgs<ExtArgs>
    application?: boolean | user$applicationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | user$reviewArgs<ExtArgs>
    application?: boolean | user$applicationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      review: Prisma.$reviewPayload<ExtArgs>[]
      application: Prisma.$applicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: userFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: userAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends user$reviewArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    application<T extends user$applicationArgs<ExtArgs> = {}>(args?: Subset<T, user$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user findRaw
   */
  export type userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user.application
   */
  export type user$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    cursor?: applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    ownerId: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    description: string
    ownerId: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    jobs?: boolean | company$jobsArgs<ExtArgs>
    save?: boolean | company$saveArgs<ExtArgs>
    review?: boolean | company$reviewArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type companySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "ownerId", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | company$jobsArgs<ExtArgs>
    save?: boolean | company$saveArgs<ExtArgs>
    review?: boolean | company$reviewArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      jobs: Prisma.$openingPayload<ExtArgs>[]
      save: Prisma.$savePayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      ownerId: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * @param {companyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const company = await prisma.company.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: companyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Company.
     * @param {companyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const company = await prisma.company.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: companyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends company$jobsArgs<ExtArgs> = {}>(args?: Subset<T, company$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    save<T extends company$saveArgs<ExtArgs> = {}>(args?: Subset<T, company$saveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends company$reviewArgs<ExtArgs> = {}>(args?: Subset<T, company$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly name: FieldRef<"company", 'String'>
    readonly description: FieldRef<"company", 'String'>
    readonly ownerId: FieldRef<"company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company findRaw
   */
  export type companyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * company aggregateRaw
   */
  export type companyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * company.jobs
   */
  export type company$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    where?: openingWhereInput
    orderBy?: openingOrderByWithRelationInput | openingOrderByWithRelationInput[]
    cursor?: openingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * company.save
   */
  export type company$saveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    where?: saveWhereInput
    orderBy?: saveOrderByWithRelationInput | saveOrderByWithRelationInput[]
    cursor?: saveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * company.review
   */
  export type company$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model opening
   */

  export type AggregateOpening = {
    _count: OpeningCountAggregateOutputType | null
    _avg: OpeningAvgAggregateOutputType | null
    _sum: OpeningSumAggregateOutputType | null
    _min: OpeningMinAggregateOutputType | null
    _max: OpeningMaxAggregateOutputType | null
  }

  export type OpeningAvgAggregateOutputType = {
    salary: number | null
  }

  export type OpeningSumAggregateOutputType = {
    salary: number | null
  }

  export type OpeningMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    employment_type: string | null
    location: string | null
    salary: number | null
    company_id: string | null
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
  }

  export type OpeningMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    employment_type: string | null
    location: string | null
    salary: number | null
    company_id: string | null
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
  }

  export type OpeningCountAggregateOutputType = {
    id: number
    title: number
    description: number
    job_type: number
    employment_type: number
    location: number
    salary: number
    company_id: number
    category: number
    job_id: number
    apply_link: number
    responsibilities: number
    qualifications: number
    logo: number
    _all: number
  }


  export type OpeningAvgAggregateInputType = {
    salary?: true
  }

  export type OpeningSumAggregateInputType = {
    salary?: true
  }

  export type OpeningMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    company_id?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
  }

  export type OpeningMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    company_id?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
  }

  export type OpeningCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    company_id?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
    _all?: true
  }

  export type OpeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opening to aggregate.
     */
    where?: openingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openings to fetch.
     */
    orderBy?: openingOrderByWithRelationInput | openingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: openingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned openings
    **/
    _count?: true | OpeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpeningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpeningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpeningMaxAggregateInputType
  }

  export type GetOpeningAggregateType<T extends OpeningAggregateArgs> = {
        [P in keyof T & keyof AggregateOpening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpening[P]>
      : GetScalarType<T[P], AggregateOpening[P]>
  }




  export type openingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: openingWhereInput
    orderBy?: openingOrderByWithAggregationInput | openingOrderByWithAggregationInput[]
    by: OpeningScalarFieldEnum[] | OpeningScalarFieldEnum
    having?: openingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpeningCountAggregateInputType | true
    _avg?: OpeningAvgAggregateInputType
    _sum?: OpeningSumAggregateInputType
    _min?: OpeningMinAggregateInputType
    _max?: OpeningMaxAggregateInputType
  }

  export type OpeningGroupByOutputType = {
    id: string
    title: string
    description: string
    job_type: string
    employment_type: string
    location: string
    salary: number
    company_id: string
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
    _count: OpeningCountAggregateOutputType | null
    _avg: OpeningAvgAggregateOutputType | null
    _sum: OpeningSumAggregateOutputType | null
    _min: OpeningMinAggregateOutputType | null
    _max: OpeningMaxAggregateOutputType | null
  }

  type GetOpeningGroupByPayload<T extends openingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpeningGroupByOutputType[P]>
            : GetScalarType<T[P], OpeningGroupByOutputType[P]>
        }
      >
    >


  export type openingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    job_type?: boolean
    employment_type?: boolean
    location?: boolean
    salary?: boolean
    company_id?: boolean
    category?: boolean
    job_id?: boolean
    apply_link?: boolean
    responsibilities?: boolean
    qualifications?: boolean
    logo?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
    application?: boolean | opening$applicationArgs<ExtArgs>
    _count?: boolean | OpeningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opening"]>



  export type openingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    job_type?: boolean
    employment_type?: boolean
    location?: boolean
    salary?: boolean
    company_id?: boolean
    category?: boolean
    job_id?: boolean
    apply_link?: boolean
    responsibilities?: boolean
    qualifications?: boolean
    logo?: boolean
  }

  export type openingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "job_type" | "employment_type" | "location" | "salary" | "company_id" | "category" | "job_id" | "apply_link" | "responsibilities" | "qualifications" | "logo", ExtArgs["result"]["opening"]>
  export type openingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
    application?: boolean | opening$applicationArgs<ExtArgs>
    _count?: boolean | OpeningCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $openingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "opening"
    objects: {
      company: Prisma.$companyPayload<ExtArgs>
      application: Prisma.$applicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      job_type: string
      employment_type: string
      location: string
      salary: number
      company_id: string
      category: string | null
      job_id: string | null
      apply_link: string | null
      responsibilities: string | null
      qualifications: string | null
      logo: string | null
    }, ExtArgs["result"]["opening"]>
    composites: {}
  }

  type openingGetPayload<S extends boolean | null | undefined | openingDefaultArgs> = $Result.GetResult<Prisma.$openingPayload, S>

  type openingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<openingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpeningCountAggregateInputType | true
    }

  export interface openingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['opening'], meta: { name: 'opening' } }
    /**
     * Find zero or one Opening that matches the filter.
     * @param {openingFindUniqueArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends openingFindUniqueArgs>(args: SelectSubset<T, openingFindUniqueArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opening that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {openingFindUniqueOrThrowArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends openingFindUniqueOrThrowArgs>(args: SelectSubset<T, openingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openingFindFirstArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends openingFindFirstArgs>(args?: SelectSubset<T, openingFindFirstArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openingFindFirstOrThrowArgs} args - Arguments to find a Opening
     * @example
     * // Get one Opening
     * const opening = await prisma.opening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends openingFindFirstOrThrowArgs>(args?: SelectSubset<T, openingFindFirstOrThrowArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Openings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Openings
     * const openings = await prisma.opening.findMany()
     * 
     * // Get first 10 Openings
     * const openings = await prisma.opening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openingWithIdOnly = await prisma.opening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends openingFindManyArgs>(args?: SelectSubset<T, openingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opening.
     * @param {openingCreateArgs} args - Arguments to create a Opening.
     * @example
     * // Create one Opening
     * const Opening = await prisma.opening.create({
     *   data: {
     *     // ... data to create a Opening
     *   }
     * })
     * 
     */
    create<T extends openingCreateArgs>(args: SelectSubset<T, openingCreateArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Openings.
     * @param {openingCreateManyArgs} args - Arguments to create many Openings.
     * @example
     * // Create many Openings
     * const opening = await prisma.opening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends openingCreateManyArgs>(args?: SelectSubset<T, openingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Opening.
     * @param {openingDeleteArgs} args - Arguments to delete one Opening.
     * @example
     * // Delete one Opening
     * const Opening = await prisma.opening.delete({
     *   where: {
     *     // ... filter to delete one Opening
     *   }
     * })
     * 
     */
    delete<T extends openingDeleteArgs>(args: SelectSubset<T, openingDeleteArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opening.
     * @param {openingUpdateArgs} args - Arguments to update one Opening.
     * @example
     * // Update one Opening
     * const opening = await prisma.opening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends openingUpdateArgs>(args: SelectSubset<T, openingUpdateArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Openings.
     * @param {openingDeleteManyArgs} args - Arguments to filter Openings to delete.
     * @example
     * // Delete a few Openings
     * const { count } = await prisma.opening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends openingDeleteManyArgs>(args?: SelectSubset<T, openingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Openings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Openings
     * const opening = await prisma.opening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends openingUpdateManyArgs>(args: SelectSubset<T, openingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Opening.
     * @param {openingUpsertArgs} args - Arguments to update or create a Opening.
     * @example
     * // Update or create a Opening
     * const opening = await prisma.opening.upsert({
     *   create: {
     *     // ... data to create a Opening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opening we want to update
     *   }
     * })
     */
    upsert<T extends openingUpsertArgs>(args: SelectSubset<T, openingUpsertArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Openings that matches the filter.
     * @param {openingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const opening = await prisma.opening.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: openingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Opening.
     * @param {openingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const opening = await prisma.opening.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: openingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Openings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openingCountArgs} args - Arguments to filter Openings to count.
     * @example
     * // Count the number of Openings
     * const count = await prisma.opening.count({
     *   where: {
     *     // ... the filter for the Openings we want to count
     *   }
     * })
    **/
    count<T extends openingCountArgs>(
      args?: Subset<T, openingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpeningAggregateArgs>(args: Subset<T, OpeningAggregateArgs>): Prisma.PrismaPromise<GetOpeningAggregateType<T>>

    /**
     * Group by Opening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {openingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends openingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: openingGroupByArgs['orderBy'] }
        : { orderBy?: openingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, openingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the opening model
   */
  readonly fields: openingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for opening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__openingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    application<T extends opening$applicationArgs<ExtArgs> = {}>(args?: Subset<T, opening$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the opening model
   */
  interface openingFieldRefs {
    readonly id: FieldRef<"opening", 'String'>
    readonly title: FieldRef<"opening", 'String'>
    readonly description: FieldRef<"opening", 'String'>
    readonly job_type: FieldRef<"opening", 'String'>
    readonly employment_type: FieldRef<"opening", 'String'>
    readonly location: FieldRef<"opening", 'String'>
    readonly salary: FieldRef<"opening", 'Int'>
    readonly company_id: FieldRef<"opening", 'String'>
    readonly category: FieldRef<"opening", 'String'>
    readonly job_id: FieldRef<"opening", 'String'>
    readonly apply_link: FieldRef<"opening", 'String'>
    readonly responsibilities: FieldRef<"opening", 'String'>
    readonly qualifications: FieldRef<"opening", 'String'>
    readonly logo: FieldRef<"opening", 'String'>
  }
    

  // Custom InputTypes
  /**
   * opening findUnique
   */
  export type openingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * Filter, which opening to fetch.
     */
    where: openingWhereUniqueInput
  }

  /**
   * opening findUniqueOrThrow
   */
  export type openingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * Filter, which opening to fetch.
     */
    where: openingWhereUniqueInput
  }

  /**
   * opening findFirst
   */
  export type openingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * Filter, which opening to fetch.
     */
    where?: openingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openings to fetch.
     */
    orderBy?: openingOrderByWithRelationInput | openingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for openings.
     */
    cursor?: openingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of openings.
     */
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * opening findFirstOrThrow
   */
  export type openingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * Filter, which opening to fetch.
     */
    where?: openingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openings to fetch.
     */
    orderBy?: openingOrderByWithRelationInput | openingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for openings.
     */
    cursor?: openingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of openings.
     */
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * opening findMany
   */
  export type openingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * Filter, which openings to fetch.
     */
    where?: openingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of openings to fetch.
     */
    orderBy?: openingOrderByWithRelationInput | openingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing openings.
     */
    cursor?: openingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` openings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` openings.
     */
    skip?: number
    distinct?: OpeningScalarFieldEnum | OpeningScalarFieldEnum[]
  }

  /**
   * opening create
   */
  export type openingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * The data needed to create a opening.
     */
    data: XOR<openingCreateInput, openingUncheckedCreateInput>
  }

  /**
   * opening createMany
   */
  export type openingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many openings.
     */
    data: openingCreateManyInput | openingCreateManyInput[]
  }

  /**
   * opening update
   */
  export type openingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * The data needed to update a opening.
     */
    data: XOR<openingUpdateInput, openingUncheckedUpdateInput>
    /**
     * Choose, which opening to update.
     */
    where: openingWhereUniqueInput
  }

  /**
   * opening updateMany
   */
  export type openingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update openings.
     */
    data: XOR<openingUpdateManyMutationInput, openingUncheckedUpdateManyInput>
    /**
     * Filter which openings to update
     */
    where?: openingWhereInput
    /**
     * Limit how many openings to update.
     */
    limit?: number
  }

  /**
   * opening upsert
   */
  export type openingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * The filter to search for the opening to update in case it exists.
     */
    where: openingWhereUniqueInput
    /**
     * In case the opening found by the `where` argument doesn't exist, create a new opening with this data.
     */
    create: XOR<openingCreateInput, openingUncheckedCreateInput>
    /**
     * In case the opening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<openingUpdateInput, openingUncheckedUpdateInput>
  }

  /**
   * opening delete
   */
  export type openingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
    /**
     * Filter which opening to delete.
     */
    where: openingWhereUniqueInput
  }

  /**
   * opening deleteMany
   */
  export type openingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which openings to delete
     */
    where?: openingWhereInput
    /**
     * Limit how many openings to delete.
     */
    limit?: number
  }

  /**
   * opening findRaw
   */
  export type openingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * opening aggregateRaw
   */
  export type openingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * opening.application
   */
  export type opening$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    cursor?: applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * opening without action
   */
  export type openingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opening
     */
    select?: openingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opening
     */
    omit?: openingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: openingInclude<ExtArgs> | null
  }


  /**
   * Model save
   */

  export type AggregateSave = {
    _count: SaveCountAggregateOutputType | null
    _avg: SaveAvgAggregateOutputType | null
    _sum: SaveSumAggregateOutputType | null
    _min: SaveMinAggregateOutputType | null
    _max: SaveMaxAggregateOutputType | null
  }

  export type SaveAvgAggregateOutputType = {
    salary: number | null
  }

  export type SaveSumAggregateOutputType = {
    salary: number | null
  }

  export type SaveMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    employment_type: string | null
    location: string | null
    salary: number | null
    company_id: string | null
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
  }

  export type SaveMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    employment_type: string | null
    location: string | null
    salary: number | null
    company_id: string | null
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
  }

  export type SaveCountAggregateOutputType = {
    id: number
    title: number
    description: number
    job_type: number
    employment_type: number
    location: number
    salary: number
    company_id: number
    category: number
    job_id: number
    apply_link: number
    responsibilities: number
    qualifications: number
    logo: number
    _all: number
  }


  export type SaveAvgAggregateInputType = {
    salary?: true
  }

  export type SaveSumAggregateInputType = {
    salary?: true
  }

  export type SaveMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    company_id?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
  }

  export type SaveMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    company_id?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
  }

  export type SaveCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    company_id?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
    _all?: true
  }

  export type SaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which save to aggregate.
     */
    where?: saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: saveOrderByWithRelationInput | saveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saves
    **/
    _count?: true | SaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaveMaxAggregateInputType
  }

  export type GetSaveAggregateType<T extends SaveAggregateArgs> = {
        [P in keyof T & keyof AggregateSave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSave[P]>
      : GetScalarType<T[P], AggregateSave[P]>
  }




  export type saveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saveWhereInput
    orderBy?: saveOrderByWithAggregationInput | saveOrderByWithAggregationInput[]
    by: SaveScalarFieldEnum[] | SaveScalarFieldEnum
    having?: saveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaveCountAggregateInputType | true
    _avg?: SaveAvgAggregateInputType
    _sum?: SaveSumAggregateInputType
    _min?: SaveMinAggregateInputType
    _max?: SaveMaxAggregateInputType
  }

  export type SaveGroupByOutputType = {
    id: string
    title: string
    description: string
    job_type: string
    employment_type: string
    location: string
    salary: number
    company_id: string
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
    _count: SaveCountAggregateOutputType | null
    _avg: SaveAvgAggregateOutputType | null
    _sum: SaveSumAggregateOutputType | null
    _min: SaveMinAggregateOutputType | null
    _max: SaveMaxAggregateOutputType | null
  }

  type GetSaveGroupByPayload<T extends saveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaveGroupByOutputType[P]>
            : GetScalarType<T[P], SaveGroupByOutputType[P]>
        }
      >
    >


  export type saveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    job_type?: boolean
    employment_type?: boolean
    location?: boolean
    salary?: boolean
    company_id?: boolean
    category?: boolean
    job_id?: boolean
    apply_link?: boolean
    responsibilities?: boolean
    qualifications?: boolean
    logo?: boolean
    company?: boolean | companyDefaultArgs<ExtArgs>
    application?: boolean | save$applicationArgs<ExtArgs>
    _count?: boolean | SaveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["save"]>



  export type saveSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    job_type?: boolean
    employment_type?: boolean
    location?: boolean
    salary?: boolean
    company_id?: boolean
    category?: boolean
    job_id?: boolean
    apply_link?: boolean
    responsibilities?: boolean
    qualifications?: boolean
    logo?: boolean
  }

  export type saveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "job_type" | "employment_type" | "location" | "salary" | "company_id" | "category" | "job_id" | "apply_link" | "responsibilities" | "qualifications" | "logo", ExtArgs["result"]["save"]>
  export type saveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>
    application?: boolean | save$applicationArgs<ExtArgs>
    _count?: boolean | SaveCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $savePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "save"
    objects: {
      company: Prisma.$companyPayload<ExtArgs>
      application: Prisma.$applicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      job_type: string
      employment_type: string
      location: string
      salary: number
      company_id: string
      category: string | null
      job_id: string | null
      apply_link: string | null
      responsibilities: string | null
      qualifications: string | null
      logo: string | null
    }, ExtArgs["result"]["save"]>
    composites: {}
  }

  type saveGetPayload<S extends boolean | null | undefined | saveDefaultArgs> = $Result.GetResult<Prisma.$savePayload, S>

  type saveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaveCountAggregateInputType | true
    }

  export interface saveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['save'], meta: { name: 'save' } }
    /**
     * Find zero or one Save that matches the filter.
     * @param {saveFindUniqueArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saveFindUniqueArgs>(args: SelectSubset<T, saveFindUniqueArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Save that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saveFindUniqueOrThrowArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saveFindUniqueOrThrowArgs>(args: SelectSubset<T, saveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Save that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saveFindFirstArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saveFindFirstArgs>(args?: SelectSubset<T, saveFindFirstArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Save that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saveFindFirstOrThrowArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saveFindFirstOrThrowArgs>(args?: SelectSubset<T, saveFindFirstOrThrowArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saves
     * const saves = await prisma.save.findMany()
     * 
     * // Get first 10 Saves
     * const saves = await prisma.save.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saveWithIdOnly = await prisma.save.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saveFindManyArgs>(args?: SelectSubset<T, saveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Save.
     * @param {saveCreateArgs} args - Arguments to create a Save.
     * @example
     * // Create one Save
     * const Save = await prisma.save.create({
     *   data: {
     *     // ... data to create a Save
     *   }
     * })
     * 
     */
    create<T extends saveCreateArgs>(args: SelectSubset<T, saveCreateArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saves.
     * @param {saveCreateManyArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const save = await prisma.save.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saveCreateManyArgs>(args?: SelectSubset<T, saveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Save.
     * @param {saveDeleteArgs} args - Arguments to delete one Save.
     * @example
     * // Delete one Save
     * const Save = await prisma.save.delete({
     *   where: {
     *     // ... filter to delete one Save
     *   }
     * })
     * 
     */
    delete<T extends saveDeleteArgs>(args: SelectSubset<T, saveDeleteArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Save.
     * @param {saveUpdateArgs} args - Arguments to update one Save.
     * @example
     * // Update one Save
     * const save = await prisma.save.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saveUpdateArgs>(args: SelectSubset<T, saveUpdateArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saves.
     * @param {saveDeleteManyArgs} args - Arguments to filter Saves to delete.
     * @example
     * // Delete a few Saves
     * const { count } = await prisma.save.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saveDeleteManyArgs>(args?: SelectSubset<T, saveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saves
     * const save = await prisma.save.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saveUpdateManyArgs>(args: SelectSubset<T, saveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Save.
     * @param {saveUpsertArgs} args - Arguments to update or create a Save.
     * @example
     * // Update or create a Save
     * const save = await prisma.save.upsert({
     *   create: {
     *     // ... data to create a Save
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Save we want to update
     *   }
     * })
     */
    upsert<T extends saveUpsertArgs>(args: SelectSubset<T, saveUpsertArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saves that matches the filter.
     * @param {saveFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const save = await prisma.save.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: saveFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Save.
     * @param {saveAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const save = await prisma.save.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: saveAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saveCountArgs} args - Arguments to filter Saves to count.
     * @example
     * // Count the number of Saves
     * const count = await prisma.save.count({
     *   where: {
     *     // ... the filter for the Saves we want to count
     *   }
     * })
    **/
    count<T extends saveCountArgs>(
      args?: Subset<T, saveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaveAggregateArgs>(args: Subset<T, SaveAggregateArgs>): Prisma.PrismaPromise<GetSaveAggregateType<T>>

    /**
     * Group by Save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saveGroupByArgs['orderBy'] }
        : { orderBy?: saveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the save model
   */
  readonly fields: saveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for save.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    application<T extends save$applicationArgs<ExtArgs> = {}>(args?: Subset<T, save$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the save model
   */
  interface saveFieldRefs {
    readonly id: FieldRef<"save", 'String'>
    readonly title: FieldRef<"save", 'String'>
    readonly description: FieldRef<"save", 'String'>
    readonly job_type: FieldRef<"save", 'String'>
    readonly employment_type: FieldRef<"save", 'String'>
    readonly location: FieldRef<"save", 'String'>
    readonly salary: FieldRef<"save", 'Int'>
    readonly company_id: FieldRef<"save", 'String'>
    readonly category: FieldRef<"save", 'String'>
    readonly job_id: FieldRef<"save", 'String'>
    readonly apply_link: FieldRef<"save", 'String'>
    readonly responsibilities: FieldRef<"save", 'String'>
    readonly qualifications: FieldRef<"save", 'String'>
    readonly logo: FieldRef<"save", 'String'>
  }
    

  // Custom InputTypes
  /**
   * save findUnique
   */
  export type saveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * Filter, which save to fetch.
     */
    where: saveWhereUniqueInput
  }

  /**
   * save findUniqueOrThrow
   */
  export type saveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * Filter, which save to fetch.
     */
    where: saveWhereUniqueInput
  }

  /**
   * save findFirst
   */
  export type saveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * Filter, which save to fetch.
     */
    where?: saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: saveOrderByWithRelationInput | saveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saves.
     */
    cursor?: saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * save findFirstOrThrow
   */
  export type saveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * Filter, which save to fetch.
     */
    where?: saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: saveOrderByWithRelationInput | saveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saves.
     */
    cursor?: saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * save findMany
   */
  export type saveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * Filter, which saves to fetch.
     */
    where?: saveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saves to fetch.
     */
    orderBy?: saveOrderByWithRelationInput | saveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saves.
     */
    cursor?: saveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saves.
     */
    skip?: number
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * save create
   */
  export type saveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * The data needed to create a save.
     */
    data: XOR<saveCreateInput, saveUncheckedCreateInput>
  }

  /**
   * save createMany
   */
  export type saveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saves.
     */
    data: saveCreateManyInput | saveCreateManyInput[]
  }

  /**
   * save update
   */
  export type saveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * The data needed to update a save.
     */
    data: XOR<saveUpdateInput, saveUncheckedUpdateInput>
    /**
     * Choose, which save to update.
     */
    where: saveWhereUniqueInput
  }

  /**
   * save updateMany
   */
  export type saveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saves.
     */
    data: XOR<saveUpdateManyMutationInput, saveUncheckedUpdateManyInput>
    /**
     * Filter which saves to update
     */
    where?: saveWhereInput
    /**
     * Limit how many saves to update.
     */
    limit?: number
  }

  /**
   * save upsert
   */
  export type saveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * The filter to search for the save to update in case it exists.
     */
    where: saveWhereUniqueInput
    /**
     * In case the save found by the `where` argument doesn't exist, create a new save with this data.
     */
    create: XOR<saveCreateInput, saveUncheckedCreateInput>
    /**
     * In case the save was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saveUpdateInput, saveUncheckedUpdateInput>
  }

  /**
   * save delete
   */
  export type saveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
    /**
     * Filter which save to delete.
     */
    where: saveWhereUniqueInput
  }

  /**
   * save deleteMany
   */
  export type saveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saves to delete
     */
    where?: saveWhereInput
    /**
     * Limit how many saves to delete.
     */
    limit?: number
  }

  /**
   * save findRaw
   */
  export type saveFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * save aggregateRaw
   */
  export type saveAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * save.application
   */
  export type save$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    cursor?: applicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * save without action
   */
  export type saveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the save
     */
    select?: saveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the save
     */
    omit?: saveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saveInclude<ExtArgs> | null
  }


  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    salary: number | null
  }

  export type JobSumAggregateOutputType = {
    salary: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    employment_type: string | null
    location: string | null
    salary: number | null
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    job_type: string | null
    employment_type: string | null
    location: string | null
    salary: number | null
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    job_type: number
    employment_type: number
    location: number
    salary: number
    category: number
    job_id: number
    apply_link: number
    responsibilities: number
    qualifications: number
    logo: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    salary?: true
  }

  export type JobSumAggregateInputType = {
    salary?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    job_type?: true
    employment_type?: true
    location?: true
    salary?: true
    category?: true
    job_id?: true
    apply_link?: true
    responsibilities?: true
    qualifications?: true
    logo?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: jobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    description: string
    job_type: string
    employment_type: string
    location: string
    salary: number
    category: string | null
    job_id: string | null
    apply_link: string | null
    responsibilities: string | null
    qualifications: string | null
    logo: string | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    job_type?: boolean
    employment_type?: boolean
    location?: boolean
    salary?: boolean
    category?: boolean
    job_id?: boolean
    apply_link?: boolean
    responsibilities?: boolean
    qualifications?: boolean
    logo?: boolean
  }, ExtArgs["result"]["job"]>



  export type jobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    job_type?: boolean
    employment_type?: boolean
    location?: boolean
    salary?: boolean
    category?: boolean
    job_id?: boolean
    apply_link?: boolean
    responsibilities?: boolean
    qualifications?: boolean
    logo?: boolean
  }

  export type jobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "job_type" | "employment_type" | "location" | "salary" | "category" | "job_id" | "apply_link" | "responsibilities" | "qualifications" | "logo", ExtArgs["result"]["job"]>

  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      job_type: string
      employment_type: string
      location: string
      salary: number
      category: string | null
      job_id: string | null
      apply_link: string | null
      responsibilities: string | null
      qualifications: string | null
      logo: string | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job'], meta: { name: 'job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobFindUniqueArgs>(args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs>(args: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobFindFirstArgs>(args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs>(args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobFindManyArgs>(args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends jobCreateArgs>(args: SelectSubset<T, jobCreateArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobCreateManyArgs>(args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends jobDeleteArgs>(args: SelectSubset<T, jobDeleteArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobUpdateArgs>(args: SelectSubset<T, jobUpdateArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobDeleteManyArgs>(args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobUpdateManyArgs>(args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends jobUpsertArgs>(args: SelectSubset<T, jobUpsertArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * @param {jobFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const job = await prisma.job.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: jobFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Job.
     * @param {jobAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const job = await prisma.job.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: jobAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job model
   */
  readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job model
   */
  interface jobFieldRefs {
    readonly id: FieldRef<"job", 'String'>
    readonly title: FieldRef<"job", 'String'>
    readonly description: FieldRef<"job", 'String'>
    readonly job_type: FieldRef<"job", 'String'>
    readonly employment_type: FieldRef<"job", 'String'>
    readonly location: FieldRef<"job", 'String'>
    readonly salary: FieldRef<"job", 'Int'>
    readonly category: FieldRef<"job", 'String'>
    readonly job_id: FieldRef<"job", 'String'>
    readonly apply_link: FieldRef<"job", 'String'>
    readonly responsibilities: FieldRef<"job", 'String'>
    readonly qualifications: FieldRef<"job", 'String'>
    readonly logo: FieldRef<"job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>
  }

  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
  }

  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>
  }

  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput
  }

  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * job findRaw
   */
  export type jobFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * job aggregateRaw
   */
  export type jobAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job
     */
    omit?: jobOmit<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    content: string | null
    user_id: string | null
    company_id: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    content: string | null
    user_id: string | null
    company_id: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    content: number
    user_id: number
    company_id: number
    _all: number
  }


  export type ReviewMinAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    company_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    company_id?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    company_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    content: string
    user_id: string
    company_id: string
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    company_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    content?: boolean
    user_id?: boolean
    company_id?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "user_id" | "company_id", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      company: Prisma.$companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      user_id: string
      company_id: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {reviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: reviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {reviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: reviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'String'>
    readonly content: FieldRef<"review", 'String'>
    readonly user_id: FieldRef<"review", 'String'>
    readonly company_id: FieldRef<"review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review findRaw
   */
  export type reviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * review aggregateRaw
   */
  export type reviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    job_id: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    job_id: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    user_id: number
    job_id: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application to aggregate.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput
    orderBy?: applicationOrderByWithAggregationInput | applicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: applicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    user_id: string
    job_id: string
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    opening?: boolean | openingDefaultArgs<ExtArgs>
    save?: boolean | saveDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>



  export type applicationSelectScalar = {
    id?: boolean
    user_id?: boolean
    job_id?: boolean
  }

  export type applicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "job_id", ExtArgs["result"]["application"]>
  export type applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    opening?: boolean | openingDefaultArgs<ExtArgs>
    save?: boolean | saveDefaultArgs<ExtArgs>
  }

  export type $applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "application"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      opening: Prisma.$openingPayload<ExtArgs>
      save: Prisma.$savePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      job_id: string
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type applicationGetPayload<S extends boolean | null | undefined | applicationDefaultArgs> = $Result.GetResult<Prisma.$applicationPayload, S>

  type applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['application'], meta: { name: 'application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {applicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicationFindUniqueArgs>(args: SelectSubset<T, applicationFindUniqueArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicationFindUniqueOrThrowArgs>(args: SelectSubset<T, applicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicationFindFirstArgs>(args?: SelectSubset<T, applicationFindFirstArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicationFindFirstOrThrowArgs>(args?: SelectSubset<T, applicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applicationFindManyArgs>(args?: SelectSubset<T, applicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {applicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends applicationCreateArgs>(args: SelectSubset<T, applicationCreateArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {applicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicationCreateManyArgs>(args?: SelectSubset<T, applicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {applicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends applicationDeleteArgs>(args: SelectSubset<T, applicationDeleteArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {applicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicationUpdateArgs>(args: SelectSubset<T, applicationUpdateArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {applicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicationDeleteManyArgs>(args?: SelectSubset<T, applicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicationUpdateManyArgs>(args: SelectSubset<T, applicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {applicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends applicationUpsertArgs>(args: SelectSubset<T, applicationUpsertArgs<ExtArgs>>): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * @param {applicationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const application = await prisma.application.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: applicationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Application.
     * @param {applicationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const application = await prisma.application.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: applicationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends applicationCountArgs>(
      args?: Subset<T, applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationGroupByArgs['orderBy'] }
        : { orderBy?: applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the application model
   */
  readonly fields: applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opening<T extends openingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, openingDefaultArgs<ExtArgs>>): Prisma__openingClient<$Result.GetResult<Prisma.$openingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    save<T extends saveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saveDefaultArgs<ExtArgs>>): Prisma__saveClient<$Result.GetResult<Prisma.$savePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the application model
   */
  interface applicationFieldRefs {
    readonly id: FieldRef<"application", 'String'>
    readonly user_id: FieldRef<"application", 'String'>
    readonly job_id: FieldRef<"application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * application findUnique
   */
  export type applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application findUniqueOrThrow
   */
  export type applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application findFirst
   */
  export type applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * application findFirstOrThrow
   */
  export type applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * application findMany
   */
  export type applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applications.
     */
    cursor?: applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * application create
   */
  export type applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * The data needed to create a application.
     */
    data: XOR<applicationCreateInput, applicationUncheckedCreateInput>
  }

  /**
   * application createMany
   */
  export type applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationCreateManyInput | applicationCreateManyInput[]
  }

  /**
   * application update
   */
  export type applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * The data needed to update a application.
     */
    data: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>
    /**
     * Choose, which application to update.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application updateMany
   */
  export type applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyInput>
    /**
     * Filter which applications to update
     */
    where?: applicationWhereInput
    /**
     * Limit how many applications to update.
     */
    limit?: number
  }

  /**
   * application upsert
   */
  export type applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * The filter to search for the application to update in case it exists.
     */
    where: applicationWhereUniqueInput
    /**
     * In case the application found by the `where` argument doesn't exist, create a new application with this data.
     */
    create: XOR<applicationCreateInput, applicationUncheckedCreateInput>
    /**
     * In case the application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>
  }

  /**
   * application delete
   */
  export type applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
    /**
     * Filter which application to delete.
     */
    where: applicationWhereUniqueInput
  }

  /**
   * application deleteMany
   */
  export type applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationWhereInput
    /**
     * Limit how many applications to delete.
     */
    limit?: number
  }

  /**
   * application findRaw
   */
  export type applicationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * application aggregateRaw
   */
  export type applicationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * application without action
   */
  export type applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the application
     */
    omit?: applicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    ownerId: 'ownerId'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const OpeningScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    job_type: 'job_type',
    employment_type: 'employment_type',
    location: 'location',
    salary: 'salary',
    company_id: 'company_id',
    category: 'category',
    job_id: 'job_id',
    apply_link: 'apply_link',
    responsibilities: 'responsibilities',
    qualifications: 'qualifications',
    logo: 'logo'
  };

  export type OpeningScalarFieldEnum = (typeof OpeningScalarFieldEnum)[keyof typeof OpeningScalarFieldEnum]


  export const SaveScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    job_type: 'job_type',
    employment_type: 'employment_type',
    location: 'location',
    salary: 'salary',
    company_id: 'company_id',
    category: 'category',
    job_id: 'job_id',
    apply_link: 'apply_link',
    responsibilities: 'responsibilities',
    qualifications: 'qualifications',
    logo: 'logo'
  };

  export type SaveScalarFieldEnum = (typeof SaveScalarFieldEnum)[keyof typeof SaveScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    job_type: 'job_type',
    employment_type: 'employment_type',
    location: 'location',
    salary: 'salary',
    category: 'category',
    job_id: 'job_id',
    apply_link: 'apply_link',
    responsibilities: 'responsibilities',
    qualifications: 'qualifications',
    logo: 'logo'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    user_id: 'user_id',
    company_id: 'company_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    job_id: 'job_id'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    review?: ReviewListRelationFilter
    application?: ApplicationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    review?: reviewOrderByRelationAggregateInput
    application?: applicationOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    review?: ReviewListRelationFilter
    application?: ApplicationListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: StringFilter<"company"> | string
    name?: StringFilter<"company"> | string
    description?: StringFilter<"company"> | string
    ownerId?: StringFilter<"company"> | string
    jobs?: OpeningListRelationFilter
    save?: SaveListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    jobs?: openingOrderByRelationAggregateInput
    save?: saveOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringFilter<"company"> | string
    description?: StringFilter<"company"> | string
    jobs?: OpeningListRelationFilter
    save?: SaveListRelationFilter
    review?: ReviewListRelationFilter
  }, "id" | "ownerId">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"company"> | string
    name?: StringWithAggregatesFilter<"company"> | string
    description?: StringWithAggregatesFilter<"company"> | string
    ownerId?: StringWithAggregatesFilter<"company"> | string
  }

  export type openingWhereInput = {
    AND?: openingWhereInput | openingWhereInput[]
    OR?: openingWhereInput[]
    NOT?: openingWhereInput | openingWhereInput[]
    id?: StringFilter<"opening"> | string
    title?: StringFilter<"opening"> | string
    description?: StringFilter<"opening"> | string
    job_type?: StringFilter<"opening"> | string
    employment_type?: StringFilter<"opening"> | string
    location?: StringFilter<"opening"> | string
    salary?: IntFilter<"opening"> | number
    company_id?: StringFilter<"opening"> | string
    category?: StringNullableFilter<"opening"> | string | null
    job_id?: StringNullableFilter<"opening"> | string | null
    apply_link?: StringNullableFilter<"opening"> | string | null
    responsibilities?: StringNullableFilter<"opening"> | string | null
    qualifications?: StringNullableFilter<"opening"> | string | null
    logo?: StringNullableFilter<"opening"> | string | null
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    application?: ApplicationListRelationFilter
  }

  export type openingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
    company?: companyOrderByWithRelationInput
    application?: applicationOrderByRelationAggregateInput
  }

  export type openingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: openingWhereInput | openingWhereInput[]
    OR?: openingWhereInput[]
    NOT?: openingWhereInput | openingWhereInput[]
    title?: StringFilter<"opening"> | string
    description?: StringFilter<"opening"> | string
    job_type?: StringFilter<"opening"> | string
    employment_type?: StringFilter<"opening"> | string
    location?: StringFilter<"opening"> | string
    salary?: IntFilter<"opening"> | number
    company_id?: StringFilter<"opening"> | string
    category?: StringNullableFilter<"opening"> | string | null
    job_id?: StringNullableFilter<"opening"> | string | null
    apply_link?: StringNullableFilter<"opening"> | string | null
    responsibilities?: StringNullableFilter<"opening"> | string | null
    qualifications?: StringNullableFilter<"opening"> | string | null
    logo?: StringNullableFilter<"opening"> | string | null
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    application?: ApplicationListRelationFilter
  }, "id">

  export type openingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
    _count?: openingCountOrderByAggregateInput
    _avg?: openingAvgOrderByAggregateInput
    _max?: openingMaxOrderByAggregateInput
    _min?: openingMinOrderByAggregateInput
    _sum?: openingSumOrderByAggregateInput
  }

  export type openingScalarWhereWithAggregatesInput = {
    AND?: openingScalarWhereWithAggregatesInput | openingScalarWhereWithAggregatesInput[]
    OR?: openingScalarWhereWithAggregatesInput[]
    NOT?: openingScalarWhereWithAggregatesInput | openingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"opening"> | string
    title?: StringWithAggregatesFilter<"opening"> | string
    description?: StringWithAggregatesFilter<"opening"> | string
    job_type?: StringWithAggregatesFilter<"opening"> | string
    employment_type?: StringWithAggregatesFilter<"opening"> | string
    location?: StringWithAggregatesFilter<"opening"> | string
    salary?: IntWithAggregatesFilter<"opening"> | number
    company_id?: StringWithAggregatesFilter<"opening"> | string
    category?: StringNullableWithAggregatesFilter<"opening"> | string | null
    job_id?: StringNullableWithAggregatesFilter<"opening"> | string | null
    apply_link?: StringNullableWithAggregatesFilter<"opening"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"opening"> | string | null
    qualifications?: StringNullableWithAggregatesFilter<"opening"> | string | null
    logo?: StringNullableWithAggregatesFilter<"opening"> | string | null
  }

  export type saveWhereInput = {
    AND?: saveWhereInput | saveWhereInput[]
    OR?: saveWhereInput[]
    NOT?: saveWhereInput | saveWhereInput[]
    id?: StringFilter<"save"> | string
    title?: StringFilter<"save"> | string
    description?: StringFilter<"save"> | string
    job_type?: StringFilter<"save"> | string
    employment_type?: StringFilter<"save"> | string
    location?: StringFilter<"save"> | string
    salary?: IntFilter<"save"> | number
    company_id?: StringFilter<"save"> | string
    category?: StringNullableFilter<"save"> | string | null
    job_id?: StringNullableFilter<"save"> | string | null
    apply_link?: StringNullableFilter<"save"> | string | null
    responsibilities?: StringNullableFilter<"save"> | string | null
    qualifications?: StringNullableFilter<"save"> | string | null
    logo?: StringNullableFilter<"save"> | string | null
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    application?: ApplicationListRelationFilter
  }

  export type saveOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
    company?: companyOrderByWithRelationInput
    application?: applicationOrderByRelationAggregateInput
  }

  export type saveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: saveWhereInput | saveWhereInput[]
    OR?: saveWhereInput[]
    NOT?: saveWhereInput | saveWhereInput[]
    title?: StringFilter<"save"> | string
    description?: StringFilter<"save"> | string
    job_type?: StringFilter<"save"> | string
    employment_type?: StringFilter<"save"> | string
    location?: StringFilter<"save"> | string
    salary?: IntFilter<"save"> | number
    company_id?: StringFilter<"save"> | string
    category?: StringNullableFilter<"save"> | string | null
    job_id?: StringNullableFilter<"save"> | string | null
    apply_link?: StringNullableFilter<"save"> | string | null
    responsibilities?: StringNullableFilter<"save"> | string | null
    qualifications?: StringNullableFilter<"save"> | string | null
    logo?: StringNullableFilter<"save"> | string | null
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    application?: ApplicationListRelationFilter
  }, "id">

  export type saveOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
    _count?: saveCountOrderByAggregateInput
    _avg?: saveAvgOrderByAggregateInput
    _max?: saveMaxOrderByAggregateInput
    _min?: saveMinOrderByAggregateInput
    _sum?: saveSumOrderByAggregateInput
  }

  export type saveScalarWhereWithAggregatesInput = {
    AND?: saveScalarWhereWithAggregatesInput | saveScalarWhereWithAggregatesInput[]
    OR?: saveScalarWhereWithAggregatesInput[]
    NOT?: saveScalarWhereWithAggregatesInput | saveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"save"> | string
    title?: StringWithAggregatesFilter<"save"> | string
    description?: StringWithAggregatesFilter<"save"> | string
    job_type?: StringWithAggregatesFilter<"save"> | string
    employment_type?: StringWithAggregatesFilter<"save"> | string
    location?: StringWithAggregatesFilter<"save"> | string
    salary?: IntWithAggregatesFilter<"save"> | number
    company_id?: StringWithAggregatesFilter<"save"> | string
    category?: StringNullableWithAggregatesFilter<"save"> | string | null
    job_id?: StringNullableWithAggregatesFilter<"save"> | string | null
    apply_link?: StringNullableWithAggregatesFilter<"save"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"save"> | string | null
    qualifications?: StringNullableWithAggregatesFilter<"save"> | string | null
    logo?: StringNullableWithAggregatesFilter<"save"> | string | null
  }

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    id?: StringFilter<"job"> | string
    title?: StringFilter<"job"> | string
    description?: StringFilter<"job"> | string
    job_type?: StringFilter<"job"> | string
    employment_type?: StringFilter<"job"> | string
    location?: StringFilter<"job"> | string
    salary?: IntFilter<"job"> | number
    category?: StringNullableFilter<"job"> | string | null
    job_id?: StringNullableFilter<"job"> | string | null
    apply_link?: StringNullableFilter<"job"> | string | null
    responsibilities?: StringNullableFilter<"job"> | string | null
    qualifications?: StringNullableFilter<"job"> | string | null
    logo?: StringNullableFilter<"job"> | string | null
  }

  export type jobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type jobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    title?: StringFilter<"job"> | string
    description?: StringFilter<"job"> | string
    job_type?: StringFilter<"job"> | string
    employment_type?: StringFilter<"job"> | string
    location?: StringFilter<"job"> | string
    salary?: IntFilter<"job"> | number
    category?: StringNullableFilter<"job"> | string | null
    job_id?: StringNullableFilter<"job"> | string | null
    apply_link?: StringNullableFilter<"job"> | string | null
    responsibilities?: StringNullableFilter<"job"> | string | null
    qualifications?: StringNullableFilter<"job"> | string | null
    logo?: StringNullableFilter<"job"> | string | null
  }, "id">

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
    _count?: jobCountOrderByAggregateInput
    _avg?: jobAvgOrderByAggregateInput
    _max?: jobMaxOrderByAggregateInput
    _min?: jobMinOrderByAggregateInput
    _sum?: jobSumOrderByAggregateInput
  }

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    OR?: jobScalarWhereWithAggregatesInput[]
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"job"> | string
    title?: StringWithAggregatesFilter<"job"> | string
    description?: StringWithAggregatesFilter<"job"> | string
    job_type?: StringWithAggregatesFilter<"job"> | string
    employment_type?: StringWithAggregatesFilter<"job"> | string
    location?: StringWithAggregatesFilter<"job"> | string
    salary?: IntWithAggregatesFilter<"job"> | number
    category?: StringNullableWithAggregatesFilter<"job"> | string | null
    job_id?: StringNullableWithAggregatesFilter<"job"> | string | null
    apply_link?: StringNullableWithAggregatesFilter<"job"> | string | null
    responsibilities?: StringNullableWithAggregatesFilter<"job"> | string | null
    qualifications?: StringNullableWithAggregatesFilter<"job"> | string | null
    logo?: StringNullableWithAggregatesFilter<"job"> | string | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: StringFilter<"review"> | string
    content?: StringFilter<"review"> | string
    user_id?: StringFilter<"review"> | string
    company_id?: StringFilter<"review"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    user?: userOrderByWithRelationInput
    company?: companyOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    content?: StringFilter<"review"> | string
    user_id?: StringFilter<"review"> | string
    company_id?: StringFilter<"review"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
  }, "id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"review"> | string
    content?: StringWithAggregatesFilter<"review"> | string
    user_id?: StringWithAggregatesFilter<"review"> | string
    company_id?: StringWithAggregatesFilter<"review"> | string
  }

  export type applicationWhereInput = {
    AND?: applicationWhereInput | applicationWhereInput[]
    OR?: applicationWhereInput[]
    NOT?: applicationWhereInput | applicationWhereInput[]
    id?: StringFilter<"application"> | string
    user_id?: StringFilter<"application"> | string
    job_id?: StringFilter<"application"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    opening?: XOR<OpeningScalarRelationFilter, openingWhereInput>
    save?: XOR<SaveScalarRelationFilter, saveWhereInput>
  }

  export type applicationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    user?: userOrderByWithRelationInput
    opening?: openingOrderByWithRelationInput
    save?: saveOrderByWithRelationInput
  }

  export type applicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: applicationWhereInput | applicationWhereInput[]
    OR?: applicationWhereInput[]
    NOT?: applicationWhereInput | applicationWhereInput[]
    user_id?: StringFilter<"application"> | string
    job_id?: StringFilter<"application"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    opening?: XOR<OpeningScalarRelationFilter, openingWhereInput>
    save?: XOR<SaveScalarRelationFilter, saveWhereInput>
  }, "id">

  export type applicationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    _count?: applicationCountOrderByAggregateInput
    _max?: applicationMaxOrderByAggregateInput
    _min?: applicationMinOrderByAggregateInput
  }

  export type applicationScalarWhereWithAggregatesInput = {
    AND?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[]
    OR?: applicationScalarWhereWithAggregatesInput[]
    NOT?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"application"> | string
    user_id?: StringWithAggregatesFilter<"application"> | string
    job_id?: StringWithAggregatesFilter<"application"> | string
  }

  export type userCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    review?: reviewCreateNestedManyWithoutUserInput
    application?: applicationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    review?: reviewUpdateManyWithoutUserNestedInput
    application?: applicationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: string
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type companyCreateInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    jobs?: openingCreateNestedManyWithoutCompanyInput
    save?: saveCreateNestedManyWithoutCompanyInput
    review?: reviewCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    jobs?: openingUncheckedCreateNestedManyWithoutCompanyInput
    save?: saveUncheckedCreateNestedManyWithoutCompanyInput
    review?: reviewUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jobs?: openingUpdateManyWithoutCompanyNestedInput
    save?: saveUpdateManyWithoutCompanyNestedInput
    review?: reviewUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jobs?: openingUncheckedUpdateManyWithoutCompanyNestedInput
    save?: saveUncheckedUpdateManyWithoutCompanyNestedInput
    review?: reviewUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: string
    name: string
    description: string
    ownerId: string
  }

  export type companyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type companyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type openingCreateInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    company: companyCreateNestedOneWithoutJobsInput
    application?: applicationCreateNestedManyWithoutOpeningInput
  }

  export type openingUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    company_id: string
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    application?: applicationUncheckedCreateNestedManyWithoutOpeningInput
  }

  export type openingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutJobsNestedInput
    application?: applicationUpdateManyWithoutOpeningNestedInput
  }

  export type openingUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    company_id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUncheckedUpdateManyWithoutOpeningNestedInput
  }

  export type openingCreateManyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    company_id: string
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type openingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type openingUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    company_id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saveCreateInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    company: companyCreateNestedOneWithoutSaveInput
    application?: applicationCreateNestedManyWithoutSaveInput
  }

  export type saveUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    company_id: string
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    application?: applicationUncheckedCreateNestedManyWithoutSaveInput
  }

  export type saveUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutSaveNestedInput
    application?: applicationUpdateManyWithoutSaveNestedInput
  }

  export type saveUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    company_id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUncheckedUpdateManyWithoutSaveNestedInput
  }

  export type saveCreateManyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    company_id: string
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type saveUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saveUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    company_id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobCreateInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type jobUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type jobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobCreateManyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type jobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateInput = {
    id?: string
    content: string
    user: userCreateNestedOneWithoutReviewInput
    company: companyCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: string
    content: string
    user_id: string
    company_id: string
  }

  export type reviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutReviewNestedInput
    company?: companyUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type reviewCreateManyInput = {
    id?: string
    content: string
    user_id: string
    company_id: string
  }

  export type reviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationCreateInput = {
    id?: string
    user: userCreateNestedOneWithoutApplicationInput
    opening: openingCreateNestedOneWithoutApplicationInput
    save: saveCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateInput = {
    id?: string
    user_id: string
    job_id: string
  }

  export type applicationUpdateInput = {
    user?: userUpdateOneRequiredWithoutApplicationNestedInput
    opening?: openingUpdateOneRequiredWithoutApplicationNestedInput
    save?: saveUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationCreateManyInput = {
    id?: string
    user_id: string
    job_id: string
  }

  export type applicationUpdateManyMutationInput = {

  }

  export type applicationUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: applicationWhereInput
    some?: applicationWhereInput
    none?: applicationWhereInput
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type applicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type OpeningListRelationFilter = {
    every?: openingWhereInput
    some?: openingWhereInput
    none?: openingWhereInput
  }

  export type SaveListRelationFilter = {
    every?: saveWhereInput
    some?: saveWhereInput
    none?: saveWhereInput
  }

  export type openingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type openingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type openingAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type openingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type openingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type openingSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type saveCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type saveAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type saveMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type saveMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    company_id?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type saveSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type jobAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    job_type?: SortOrder
    employment_type?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    category?: SortOrder
    job_id?: SortOrder
    apply_link?: SortOrder
    responsibilities?: SortOrder
    qualifications?: SortOrder
    logo?: SortOrder
  }

  export type jobSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    company_id?: SortOrder
  }

  export type OpeningScalarRelationFilter = {
    is?: openingWhereInput
    isNot?: openingWhereInput
  }

  export type SaveScalarRelationFilter = {
    is?: saveWhereInput
    isNot?: saveWhereInput
  }

  export type applicationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type applicationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type applicationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type applicationCreateNestedManyWithoutUserInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type applicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type applicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type applicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput> | applicationCreateWithoutUserInput[] | applicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: applicationCreateManyUserInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type openingCreateNestedManyWithoutCompanyInput = {
    create?: XOR<openingCreateWithoutCompanyInput, openingUncheckedCreateWithoutCompanyInput> | openingCreateWithoutCompanyInput[] | openingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: openingCreateOrConnectWithoutCompanyInput | openingCreateOrConnectWithoutCompanyInput[]
    createMany?: openingCreateManyCompanyInputEnvelope
    connect?: openingWhereUniqueInput | openingWhereUniqueInput[]
  }

  export type saveCreateNestedManyWithoutCompanyInput = {
    create?: XOR<saveCreateWithoutCompanyInput, saveUncheckedCreateWithoutCompanyInput> | saveCreateWithoutCompanyInput[] | saveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: saveCreateOrConnectWithoutCompanyInput | saveCreateOrConnectWithoutCompanyInput[]
    createMany?: saveCreateManyCompanyInputEnvelope
    connect?: saveWhereUniqueInput | saveWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutCompanyInput = {
    create?: XOR<reviewCreateWithoutCompanyInput, reviewUncheckedCreateWithoutCompanyInput> | reviewCreateWithoutCompanyInput[] | reviewUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCompanyInput | reviewCreateOrConnectWithoutCompanyInput[]
    createMany?: reviewCreateManyCompanyInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type openingUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<openingCreateWithoutCompanyInput, openingUncheckedCreateWithoutCompanyInput> | openingCreateWithoutCompanyInput[] | openingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: openingCreateOrConnectWithoutCompanyInput | openingCreateOrConnectWithoutCompanyInput[]
    createMany?: openingCreateManyCompanyInputEnvelope
    connect?: openingWhereUniqueInput | openingWhereUniqueInput[]
  }

  export type saveUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<saveCreateWithoutCompanyInput, saveUncheckedCreateWithoutCompanyInput> | saveCreateWithoutCompanyInput[] | saveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: saveCreateOrConnectWithoutCompanyInput | saveCreateOrConnectWithoutCompanyInput[]
    createMany?: saveCreateManyCompanyInputEnvelope
    connect?: saveWhereUniqueInput | saveWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<reviewCreateWithoutCompanyInput, reviewUncheckedCreateWithoutCompanyInput> | reviewCreateWithoutCompanyInput[] | reviewUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCompanyInput | reviewCreateOrConnectWithoutCompanyInput[]
    createMany?: reviewCreateManyCompanyInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type openingUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<openingCreateWithoutCompanyInput, openingUncheckedCreateWithoutCompanyInput> | openingCreateWithoutCompanyInput[] | openingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: openingCreateOrConnectWithoutCompanyInput | openingCreateOrConnectWithoutCompanyInput[]
    upsert?: openingUpsertWithWhereUniqueWithoutCompanyInput | openingUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: openingCreateManyCompanyInputEnvelope
    set?: openingWhereUniqueInput | openingWhereUniqueInput[]
    disconnect?: openingWhereUniqueInput | openingWhereUniqueInput[]
    delete?: openingWhereUniqueInput | openingWhereUniqueInput[]
    connect?: openingWhereUniqueInput | openingWhereUniqueInput[]
    update?: openingUpdateWithWhereUniqueWithoutCompanyInput | openingUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: openingUpdateManyWithWhereWithoutCompanyInput | openingUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: openingScalarWhereInput | openingScalarWhereInput[]
  }

  export type saveUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<saveCreateWithoutCompanyInput, saveUncheckedCreateWithoutCompanyInput> | saveCreateWithoutCompanyInput[] | saveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: saveCreateOrConnectWithoutCompanyInput | saveCreateOrConnectWithoutCompanyInput[]
    upsert?: saveUpsertWithWhereUniqueWithoutCompanyInput | saveUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: saveCreateManyCompanyInputEnvelope
    set?: saveWhereUniqueInput | saveWhereUniqueInput[]
    disconnect?: saveWhereUniqueInput | saveWhereUniqueInput[]
    delete?: saveWhereUniqueInput | saveWhereUniqueInput[]
    connect?: saveWhereUniqueInput | saveWhereUniqueInput[]
    update?: saveUpdateWithWhereUniqueWithoutCompanyInput | saveUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: saveUpdateManyWithWhereWithoutCompanyInput | saveUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: saveScalarWhereInput | saveScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<reviewCreateWithoutCompanyInput, reviewUncheckedCreateWithoutCompanyInput> | reviewCreateWithoutCompanyInput[] | reviewUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCompanyInput | reviewCreateOrConnectWithoutCompanyInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCompanyInput | reviewUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: reviewCreateManyCompanyInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCompanyInput | reviewUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCompanyInput | reviewUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type openingUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<openingCreateWithoutCompanyInput, openingUncheckedCreateWithoutCompanyInput> | openingCreateWithoutCompanyInput[] | openingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: openingCreateOrConnectWithoutCompanyInput | openingCreateOrConnectWithoutCompanyInput[]
    upsert?: openingUpsertWithWhereUniqueWithoutCompanyInput | openingUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: openingCreateManyCompanyInputEnvelope
    set?: openingWhereUniqueInput | openingWhereUniqueInput[]
    disconnect?: openingWhereUniqueInput | openingWhereUniqueInput[]
    delete?: openingWhereUniqueInput | openingWhereUniqueInput[]
    connect?: openingWhereUniqueInput | openingWhereUniqueInput[]
    update?: openingUpdateWithWhereUniqueWithoutCompanyInput | openingUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: openingUpdateManyWithWhereWithoutCompanyInput | openingUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: openingScalarWhereInput | openingScalarWhereInput[]
  }

  export type saveUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<saveCreateWithoutCompanyInput, saveUncheckedCreateWithoutCompanyInput> | saveCreateWithoutCompanyInput[] | saveUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: saveCreateOrConnectWithoutCompanyInput | saveCreateOrConnectWithoutCompanyInput[]
    upsert?: saveUpsertWithWhereUniqueWithoutCompanyInput | saveUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: saveCreateManyCompanyInputEnvelope
    set?: saveWhereUniqueInput | saveWhereUniqueInput[]
    disconnect?: saveWhereUniqueInput | saveWhereUniqueInput[]
    delete?: saveWhereUniqueInput | saveWhereUniqueInput[]
    connect?: saveWhereUniqueInput | saveWhereUniqueInput[]
    update?: saveUpdateWithWhereUniqueWithoutCompanyInput | saveUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: saveUpdateManyWithWhereWithoutCompanyInput | saveUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: saveScalarWhereInput | saveScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<reviewCreateWithoutCompanyInput, reviewUncheckedCreateWithoutCompanyInput> | reviewCreateWithoutCompanyInput[] | reviewUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCompanyInput | reviewCreateOrConnectWithoutCompanyInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCompanyInput | reviewUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: reviewCreateManyCompanyInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCompanyInput | reviewUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCompanyInput | reviewUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutJobsInput = {
    create?: XOR<companyCreateWithoutJobsInput, companyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: companyCreateOrConnectWithoutJobsInput
    connect?: companyWhereUniqueInput
  }

  export type applicationCreateNestedManyWithoutOpeningInput = {
    create?: XOR<applicationCreateWithoutOpeningInput, applicationUncheckedCreateWithoutOpeningInput> | applicationCreateWithoutOpeningInput[] | applicationUncheckedCreateWithoutOpeningInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutOpeningInput | applicationCreateOrConnectWithoutOpeningInput[]
    createMany?: applicationCreateManyOpeningInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type applicationUncheckedCreateNestedManyWithoutOpeningInput = {
    create?: XOR<applicationCreateWithoutOpeningInput, applicationUncheckedCreateWithoutOpeningInput> | applicationCreateWithoutOpeningInput[] | applicationUncheckedCreateWithoutOpeningInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutOpeningInput | applicationCreateOrConnectWithoutOpeningInput[]
    createMany?: applicationCreateManyOpeningInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type companyUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<companyCreateWithoutJobsInput, companyUncheckedCreateWithoutJobsInput>
    connectOrCreate?: companyCreateOrConnectWithoutJobsInput
    upsert?: companyUpsertWithoutJobsInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutJobsInput, companyUpdateWithoutJobsInput>, companyUncheckedUpdateWithoutJobsInput>
  }

  export type applicationUpdateManyWithoutOpeningNestedInput = {
    create?: XOR<applicationCreateWithoutOpeningInput, applicationUncheckedCreateWithoutOpeningInput> | applicationCreateWithoutOpeningInput[] | applicationUncheckedCreateWithoutOpeningInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutOpeningInput | applicationCreateOrConnectWithoutOpeningInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutOpeningInput | applicationUpsertWithWhereUniqueWithoutOpeningInput[]
    createMany?: applicationCreateManyOpeningInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutOpeningInput | applicationUpdateWithWhereUniqueWithoutOpeningInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutOpeningInput | applicationUpdateManyWithWhereWithoutOpeningInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type applicationUncheckedUpdateManyWithoutOpeningNestedInput = {
    create?: XOR<applicationCreateWithoutOpeningInput, applicationUncheckedCreateWithoutOpeningInput> | applicationCreateWithoutOpeningInput[] | applicationUncheckedCreateWithoutOpeningInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutOpeningInput | applicationCreateOrConnectWithoutOpeningInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutOpeningInput | applicationUpsertWithWhereUniqueWithoutOpeningInput[]
    createMany?: applicationCreateManyOpeningInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutOpeningInput | applicationUpdateWithWhereUniqueWithoutOpeningInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutOpeningInput | applicationUpdateManyWithWhereWithoutOpeningInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutSaveInput = {
    create?: XOR<companyCreateWithoutSaveInput, companyUncheckedCreateWithoutSaveInput>
    connectOrCreate?: companyCreateOrConnectWithoutSaveInput
    connect?: companyWhereUniqueInput
  }

  export type applicationCreateNestedManyWithoutSaveInput = {
    create?: XOR<applicationCreateWithoutSaveInput, applicationUncheckedCreateWithoutSaveInput> | applicationCreateWithoutSaveInput[] | applicationUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutSaveInput | applicationCreateOrConnectWithoutSaveInput[]
    createMany?: applicationCreateManySaveInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type applicationUncheckedCreateNestedManyWithoutSaveInput = {
    create?: XOR<applicationCreateWithoutSaveInput, applicationUncheckedCreateWithoutSaveInput> | applicationCreateWithoutSaveInput[] | applicationUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutSaveInput | applicationCreateOrConnectWithoutSaveInput[]
    createMany?: applicationCreateManySaveInputEnvelope
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
  }

  export type companyUpdateOneRequiredWithoutSaveNestedInput = {
    create?: XOR<companyCreateWithoutSaveInput, companyUncheckedCreateWithoutSaveInput>
    connectOrCreate?: companyCreateOrConnectWithoutSaveInput
    upsert?: companyUpsertWithoutSaveInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutSaveInput, companyUpdateWithoutSaveInput>, companyUncheckedUpdateWithoutSaveInput>
  }

  export type applicationUpdateManyWithoutSaveNestedInput = {
    create?: XOR<applicationCreateWithoutSaveInput, applicationUncheckedCreateWithoutSaveInput> | applicationCreateWithoutSaveInput[] | applicationUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutSaveInput | applicationCreateOrConnectWithoutSaveInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutSaveInput | applicationUpsertWithWhereUniqueWithoutSaveInput[]
    createMany?: applicationCreateManySaveInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutSaveInput | applicationUpdateWithWhereUniqueWithoutSaveInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutSaveInput | applicationUpdateManyWithWhereWithoutSaveInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type applicationUncheckedUpdateManyWithoutSaveNestedInput = {
    create?: XOR<applicationCreateWithoutSaveInput, applicationUncheckedCreateWithoutSaveInput> | applicationCreateWithoutSaveInput[] | applicationUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: applicationCreateOrConnectWithoutSaveInput | applicationCreateOrConnectWithoutSaveInput[]
    upsert?: applicationUpsertWithWhereUniqueWithoutSaveInput | applicationUpsertWithWhereUniqueWithoutSaveInput[]
    createMany?: applicationCreateManySaveInputEnvelope
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[]
    update?: applicationUpdateWithWhereUniqueWithoutSaveInput | applicationUpdateWithWhereUniqueWithoutSaveInput[]
    updateMany?: applicationUpdateManyWithWhereWithoutSaveInput | applicationUpdateManyWithWhereWithoutSaveInput[]
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    connect?: userWhereUniqueInput
  }

  export type companyCreateNestedOneWithoutReviewInput = {
    create?: XOR<companyCreateWithoutReviewInput, companyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: companyCreateOrConnectWithoutReviewInput
    connect?: companyWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    upsert?: userUpsertWithoutReviewInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>, userUncheckedUpdateWithoutReviewInput>
  }

  export type companyUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<companyCreateWithoutReviewInput, companyUncheckedCreateWithoutReviewInput>
    connectOrCreate?: companyCreateOrConnectWithoutReviewInput
    upsert?: companyUpsertWithoutReviewInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutReviewInput, companyUpdateWithoutReviewInput>, companyUncheckedUpdateWithoutReviewInput>
  }

  export type userCreateNestedOneWithoutApplicationInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput
    connect?: userWhereUniqueInput
  }

  export type openingCreateNestedOneWithoutApplicationInput = {
    create?: XOR<openingCreateWithoutApplicationInput, openingUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: openingCreateOrConnectWithoutApplicationInput
    connect?: openingWhereUniqueInput
  }

  export type saveCreateNestedOneWithoutApplicationInput = {
    create?: XOR<saveCreateWithoutApplicationInput, saveUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: saveCreateOrConnectWithoutApplicationInput
    connect?: saveWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput
    upsert?: userUpsertWithoutApplicationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutApplicationInput, userUpdateWithoutApplicationInput>, userUncheckedUpdateWithoutApplicationInput>
  }

  export type openingUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<openingCreateWithoutApplicationInput, openingUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: openingCreateOrConnectWithoutApplicationInput
    upsert?: openingUpsertWithoutApplicationInput
    connect?: openingWhereUniqueInput
    update?: XOR<XOR<openingUpdateToOneWithWhereWithoutApplicationInput, openingUpdateWithoutApplicationInput>, openingUncheckedUpdateWithoutApplicationInput>
  }

  export type saveUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<saveCreateWithoutApplicationInput, saveUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: saveCreateOrConnectWithoutApplicationInput
    upsert?: saveUpsertWithoutApplicationInput
    connect?: saveWhereUniqueInput
    update?: XOR<XOR<saveUpdateToOneWithWhereWithoutApplicationInput, saveUpdateWithoutApplicationInput>, saveUncheckedUpdateWithoutApplicationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type reviewCreateWithoutUserInput = {
    id?: string
    content: string
    company: companyCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    company_id: string
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
  }

  export type applicationCreateWithoutUserInput = {
    id?: string
    opening: openingCreateNestedOneWithoutApplicationInput
    save: saveCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateWithoutUserInput = {
    id?: string
    job_id: string
  }

  export type applicationCreateOrConnectWithoutUserInput = {
    where: applicationWhereUniqueInput
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
  }

  export type applicationCreateManyUserInputEnvelope = {
    data: applicationCreateManyUserInput | applicationCreateManyUserInput[]
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: StringFilter<"review"> | string
    content?: StringFilter<"review"> | string
    user_id?: StringFilter<"review"> | string
    company_id?: StringFilter<"review"> | string
  }

  export type applicationUpsertWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput
    update: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
  }

  export type applicationUpdateWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput
    data: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>
  }

  export type applicationUpdateManyWithWhereWithoutUserInput = {
    where: applicationScalarWhereInput
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutUserInput>
  }

  export type applicationScalarWhereInput = {
    AND?: applicationScalarWhereInput | applicationScalarWhereInput[]
    OR?: applicationScalarWhereInput[]
    NOT?: applicationScalarWhereInput | applicationScalarWhereInput[]
    id?: StringFilter<"application"> | string
    user_id?: StringFilter<"application"> | string
    job_id?: StringFilter<"application"> | string
  }

  export type openingCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    application?: applicationCreateNestedManyWithoutOpeningInput
  }

  export type openingUncheckedCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    application?: applicationUncheckedCreateNestedManyWithoutOpeningInput
  }

  export type openingCreateOrConnectWithoutCompanyInput = {
    where: openingWhereUniqueInput
    create: XOR<openingCreateWithoutCompanyInput, openingUncheckedCreateWithoutCompanyInput>
  }

  export type openingCreateManyCompanyInputEnvelope = {
    data: openingCreateManyCompanyInput | openingCreateManyCompanyInput[]
  }

  export type saveCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    application?: applicationCreateNestedManyWithoutSaveInput
  }

  export type saveUncheckedCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    application?: applicationUncheckedCreateNestedManyWithoutSaveInput
  }

  export type saveCreateOrConnectWithoutCompanyInput = {
    where: saveWhereUniqueInput
    create: XOR<saveCreateWithoutCompanyInput, saveUncheckedCreateWithoutCompanyInput>
  }

  export type saveCreateManyCompanyInputEnvelope = {
    data: saveCreateManyCompanyInput | saveCreateManyCompanyInput[]
  }

  export type reviewCreateWithoutCompanyInput = {
    id?: string
    content: string
    user: userCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutCompanyInput = {
    id?: string
    content: string
    user_id: string
  }

  export type reviewCreateOrConnectWithoutCompanyInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutCompanyInput, reviewUncheckedCreateWithoutCompanyInput>
  }

  export type reviewCreateManyCompanyInputEnvelope = {
    data: reviewCreateManyCompanyInput | reviewCreateManyCompanyInput[]
  }

  export type openingUpsertWithWhereUniqueWithoutCompanyInput = {
    where: openingWhereUniqueInput
    update: XOR<openingUpdateWithoutCompanyInput, openingUncheckedUpdateWithoutCompanyInput>
    create: XOR<openingCreateWithoutCompanyInput, openingUncheckedCreateWithoutCompanyInput>
  }

  export type openingUpdateWithWhereUniqueWithoutCompanyInput = {
    where: openingWhereUniqueInput
    data: XOR<openingUpdateWithoutCompanyInput, openingUncheckedUpdateWithoutCompanyInput>
  }

  export type openingUpdateManyWithWhereWithoutCompanyInput = {
    where: openingScalarWhereInput
    data: XOR<openingUpdateManyMutationInput, openingUncheckedUpdateManyWithoutCompanyInput>
  }

  export type openingScalarWhereInput = {
    AND?: openingScalarWhereInput | openingScalarWhereInput[]
    OR?: openingScalarWhereInput[]
    NOT?: openingScalarWhereInput | openingScalarWhereInput[]
    id?: StringFilter<"opening"> | string
    title?: StringFilter<"opening"> | string
    description?: StringFilter<"opening"> | string
    job_type?: StringFilter<"opening"> | string
    employment_type?: StringFilter<"opening"> | string
    location?: StringFilter<"opening"> | string
    salary?: IntFilter<"opening"> | number
    company_id?: StringFilter<"opening"> | string
    category?: StringNullableFilter<"opening"> | string | null
    job_id?: StringNullableFilter<"opening"> | string | null
    apply_link?: StringNullableFilter<"opening"> | string | null
    responsibilities?: StringNullableFilter<"opening"> | string | null
    qualifications?: StringNullableFilter<"opening"> | string | null
    logo?: StringNullableFilter<"opening"> | string | null
  }

  export type saveUpsertWithWhereUniqueWithoutCompanyInput = {
    where: saveWhereUniqueInput
    update: XOR<saveUpdateWithoutCompanyInput, saveUncheckedUpdateWithoutCompanyInput>
    create: XOR<saveCreateWithoutCompanyInput, saveUncheckedCreateWithoutCompanyInput>
  }

  export type saveUpdateWithWhereUniqueWithoutCompanyInput = {
    where: saveWhereUniqueInput
    data: XOR<saveUpdateWithoutCompanyInput, saveUncheckedUpdateWithoutCompanyInput>
  }

  export type saveUpdateManyWithWhereWithoutCompanyInput = {
    where: saveScalarWhereInput
    data: XOR<saveUpdateManyMutationInput, saveUncheckedUpdateManyWithoutCompanyInput>
  }

  export type saveScalarWhereInput = {
    AND?: saveScalarWhereInput | saveScalarWhereInput[]
    OR?: saveScalarWhereInput[]
    NOT?: saveScalarWhereInput | saveScalarWhereInput[]
    id?: StringFilter<"save"> | string
    title?: StringFilter<"save"> | string
    description?: StringFilter<"save"> | string
    job_type?: StringFilter<"save"> | string
    employment_type?: StringFilter<"save"> | string
    location?: StringFilter<"save"> | string
    salary?: IntFilter<"save"> | number
    company_id?: StringFilter<"save"> | string
    category?: StringNullableFilter<"save"> | string | null
    job_id?: StringNullableFilter<"save"> | string | null
    apply_link?: StringNullableFilter<"save"> | string | null
    responsibilities?: StringNullableFilter<"save"> | string | null
    qualifications?: StringNullableFilter<"save"> | string | null
    logo?: StringNullableFilter<"save"> | string | null
  }

  export type reviewUpsertWithWhereUniqueWithoutCompanyInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutCompanyInput, reviewUncheckedUpdateWithoutCompanyInput>
    create: XOR<reviewCreateWithoutCompanyInput, reviewUncheckedCreateWithoutCompanyInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutCompanyInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutCompanyInput, reviewUncheckedUpdateWithoutCompanyInput>
  }

  export type reviewUpdateManyWithWhereWithoutCompanyInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutCompanyInput>
  }

  export type companyCreateWithoutJobsInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    save?: saveCreateNestedManyWithoutCompanyInput
    review?: reviewCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutJobsInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    save?: saveUncheckedCreateNestedManyWithoutCompanyInput
    review?: reviewUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutJobsInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutJobsInput, companyUncheckedCreateWithoutJobsInput>
  }

  export type applicationCreateWithoutOpeningInput = {
    id?: string
    user: userCreateNestedOneWithoutApplicationInput
    save: saveCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateWithoutOpeningInput = {
    id?: string
    user_id: string
  }

  export type applicationCreateOrConnectWithoutOpeningInput = {
    where: applicationWhereUniqueInput
    create: XOR<applicationCreateWithoutOpeningInput, applicationUncheckedCreateWithoutOpeningInput>
  }

  export type applicationCreateManyOpeningInputEnvelope = {
    data: applicationCreateManyOpeningInput | applicationCreateManyOpeningInput[]
  }

  export type companyUpsertWithoutJobsInput = {
    update: XOR<companyUpdateWithoutJobsInput, companyUncheckedUpdateWithoutJobsInput>
    create: XOR<companyCreateWithoutJobsInput, companyUncheckedCreateWithoutJobsInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutJobsInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutJobsInput, companyUncheckedUpdateWithoutJobsInput>
  }

  export type companyUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    save?: saveUpdateManyWithoutCompanyNestedInput
    review?: reviewUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    save?: saveUncheckedUpdateManyWithoutCompanyNestedInput
    review?: reviewUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type applicationUpsertWithWhereUniqueWithoutOpeningInput = {
    where: applicationWhereUniqueInput
    update: XOR<applicationUpdateWithoutOpeningInput, applicationUncheckedUpdateWithoutOpeningInput>
    create: XOR<applicationCreateWithoutOpeningInput, applicationUncheckedCreateWithoutOpeningInput>
  }

  export type applicationUpdateWithWhereUniqueWithoutOpeningInput = {
    where: applicationWhereUniqueInput
    data: XOR<applicationUpdateWithoutOpeningInput, applicationUncheckedUpdateWithoutOpeningInput>
  }

  export type applicationUpdateManyWithWhereWithoutOpeningInput = {
    where: applicationScalarWhereInput
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutOpeningInput>
  }

  export type companyCreateWithoutSaveInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    jobs?: openingCreateNestedManyWithoutCompanyInput
    review?: reviewCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutSaveInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    jobs?: openingUncheckedCreateNestedManyWithoutCompanyInput
    review?: reviewUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutSaveInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutSaveInput, companyUncheckedCreateWithoutSaveInput>
  }

  export type applicationCreateWithoutSaveInput = {
    id?: string
    user: userCreateNestedOneWithoutApplicationInput
    opening: openingCreateNestedOneWithoutApplicationInput
  }

  export type applicationUncheckedCreateWithoutSaveInput = {
    id?: string
    user_id: string
  }

  export type applicationCreateOrConnectWithoutSaveInput = {
    where: applicationWhereUniqueInput
    create: XOR<applicationCreateWithoutSaveInput, applicationUncheckedCreateWithoutSaveInput>
  }

  export type applicationCreateManySaveInputEnvelope = {
    data: applicationCreateManySaveInput | applicationCreateManySaveInput[]
  }

  export type companyUpsertWithoutSaveInput = {
    update: XOR<companyUpdateWithoutSaveInput, companyUncheckedUpdateWithoutSaveInput>
    create: XOR<companyCreateWithoutSaveInput, companyUncheckedCreateWithoutSaveInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutSaveInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutSaveInput, companyUncheckedUpdateWithoutSaveInput>
  }

  export type companyUpdateWithoutSaveInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jobs?: openingUpdateManyWithoutCompanyNestedInput
    review?: reviewUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutSaveInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jobs?: openingUncheckedUpdateManyWithoutCompanyNestedInput
    review?: reviewUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type applicationUpsertWithWhereUniqueWithoutSaveInput = {
    where: applicationWhereUniqueInput
    update: XOR<applicationUpdateWithoutSaveInput, applicationUncheckedUpdateWithoutSaveInput>
    create: XOR<applicationCreateWithoutSaveInput, applicationUncheckedCreateWithoutSaveInput>
  }

  export type applicationUpdateWithWhereUniqueWithoutSaveInput = {
    where: applicationWhereUniqueInput
    data: XOR<applicationUpdateWithoutSaveInput, applicationUncheckedUpdateWithoutSaveInput>
  }

  export type applicationUpdateManyWithWhereWithoutSaveInput = {
    where: applicationScalarWhereInput
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutSaveInput>
  }

  export type userCreateWithoutReviewInput = {
    id?: string
    email: string
    password: string
    role?: string
    application?: applicationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string
    email: string
    password: string
    role?: string
    application?: applicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
  }

  export type companyCreateWithoutReviewInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    jobs?: openingCreateNestedManyWithoutCompanyInput
    save?: saveCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutReviewInput = {
    id?: string
    name: string
    description: string
    ownerId: string
    jobs?: openingUncheckedCreateNestedManyWithoutCompanyInput
    save?: saveUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutReviewInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutReviewInput, companyUncheckedCreateWithoutReviewInput>
  }

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
  }

  export type userUpdateWithoutReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    application?: applicationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type companyUpsertWithoutReviewInput = {
    update: XOR<companyUpdateWithoutReviewInput, companyUncheckedUpdateWithoutReviewInput>
    create: XOR<companyCreateWithoutReviewInput, companyUncheckedCreateWithoutReviewInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutReviewInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutReviewInput, companyUncheckedUpdateWithoutReviewInput>
  }

  export type companyUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jobs?: openingUpdateManyWithoutCompanyNestedInput
    save?: saveUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jobs?: openingUncheckedUpdateManyWithoutCompanyNestedInput
    save?: saveUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type userCreateWithoutApplicationInput = {
    id?: string
    email: string
    password: string
    role?: string
    review?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutApplicationInput = {
    id?: string
    email: string
    password: string
    role?: string
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutApplicationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
  }

  export type openingCreateWithoutApplicationInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    company: companyCreateNestedOneWithoutJobsInput
  }

  export type openingUncheckedCreateWithoutApplicationInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    company_id: string
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type openingCreateOrConnectWithoutApplicationInput = {
    where: openingWhereUniqueInput
    create: XOR<openingCreateWithoutApplicationInput, openingUncheckedCreateWithoutApplicationInput>
  }

  export type saveCreateWithoutApplicationInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
    company: companyCreateNestedOneWithoutSaveInput
  }

  export type saveUncheckedCreateWithoutApplicationInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    company_id: string
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type saveCreateOrConnectWithoutApplicationInput = {
    where: saveWhereUniqueInput
    create: XOR<saveCreateWithoutApplicationInput, saveUncheckedCreateWithoutApplicationInput>
  }

  export type userUpsertWithoutApplicationInput = {
    update: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutApplicationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>
  }

  export type userUpdateWithoutApplicationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    review?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutApplicationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type openingUpsertWithoutApplicationInput = {
    update: XOR<openingUpdateWithoutApplicationInput, openingUncheckedUpdateWithoutApplicationInput>
    create: XOR<openingCreateWithoutApplicationInput, openingUncheckedCreateWithoutApplicationInput>
    where?: openingWhereInput
  }

  export type openingUpdateToOneWithWhereWithoutApplicationInput = {
    where?: openingWhereInput
    data: XOR<openingUpdateWithoutApplicationInput, openingUncheckedUpdateWithoutApplicationInput>
  }

  export type openingUpdateWithoutApplicationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutJobsNestedInput
  }

  export type openingUncheckedUpdateWithoutApplicationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    company_id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saveUpsertWithoutApplicationInput = {
    update: XOR<saveUpdateWithoutApplicationInput, saveUncheckedUpdateWithoutApplicationInput>
    create: XOR<saveCreateWithoutApplicationInput, saveUncheckedCreateWithoutApplicationInput>
    where?: saveWhereInput
  }

  export type saveUpdateToOneWithWhereWithoutApplicationInput = {
    where?: saveWhereInput
    data: XOR<saveUpdateWithoutApplicationInput, saveUncheckedUpdateWithoutApplicationInput>
  }

  export type saveUpdateWithoutApplicationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companyUpdateOneRequiredWithoutSaveNestedInput
  }

  export type saveUncheckedUpdateWithoutApplicationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    company_id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateManyUserInput = {
    id?: string
    content: string
    company_id: string
  }

  export type applicationCreateManyUserInput = {
    id?: string
    job_id: string
  }

  export type reviewUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationUpdateWithoutUserInput = {
    opening?: openingUpdateOneRequiredWithoutApplicationNestedInput
    save?: saveUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateWithoutUserInput = {
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationUncheckedUpdateManyWithoutUserInput = {
    job_id?: StringFieldUpdateOperationsInput | string
  }

  export type openingCreateManyCompanyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type saveCreateManyCompanyInput = {
    id?: string
    title: string
    description: string
    job_type?: string
    employment_type?: string
    location: string
    salary: number
    category?: string | null
    job_id?: string | null
    apply_link?: string | null
    responsibilities?: string | null
    qualifications?: string | null
    logo?: string | null
  }

  export type reviewCreateManyCompanyInput = {
    id?: string
    content: string
    user_id: string
  }

  export type openingUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUpdateManyWithoutOpeningNestedInput
  }

  export type openingUncheckedUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUncheckedUpdateManyWithoutOpeningNestedInput
  }

  export type openingUncheckedUpdateManyWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saveUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUpdateManyWithoutSaveNestedInput
  }

  export type saveUncheckedUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    application?: applicationUncheckedUpdateManyWithoutSaveNestedInput
  }

  export type saveUncheckedUpdateManyWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    employment_type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUpdateWithoutCompanyInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutCompanyInput = {
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyWithoutCompanyInput = {
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationCreateManyOpeningInput = {
    id?: string
    user_id: string
  }

  export type applicationUpdateWithoutOpeningInput = {
    user?: userUpdateOneRequiredWithoutApplicationNestedInput
    save?: saveUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateWithoutOpeningInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationUncheckedUpdateManyWithoutOpeningInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationCreateManySaveInput = {
    id?: string
    user_id: string
  }

  export type applicationUpdateWithoutSaveInput = {
    user?: userUpdateOneRequiredWithoutApplicationNestedInput
    opening?: openingUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type applicationUncheckedUpdateWithoutSaveInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type applicationUncheckedUpdateManyWithoutSaveInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
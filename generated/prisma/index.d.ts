
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SessionUser
 * 
 */
export type SessionUser = $Result.DefaultSelection<Prisma.$SessionUserPayload>
/**
 * Model AuthCode
 * 
 */
export type AuthCode = $Result.DefaultSelection<Prisma.$AuthCodePayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionUser`: Exposes CRUD operations for the **SessionUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionUsers
    * const sessionUsers = await prisma.sessionUser.findMany()
    * ```
    */
  get sessionUser(): Prisma.SessionUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authCode`: Exposes CRUD operations for the **AuthCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthCodes
    * const authCodes = await prisma.authCode.findMany()
    * ```
    */
  get authCode(): Prisma.AuthCodeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    SessionUser: 'SessionUser',
    AuthCode: 'AuthCode'
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
      modelProps: "user" | "sessionUser" | "authCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SessionUser: {
        payload: Prisma.$SessionUserPayload<ExtArgs>
        fields: Prisma.SessionUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>
          }
          findFirst: {
            args: Prisma.SessionUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>
          }
          findMany: {
            args: Prisma.SessionUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>[]
          }
          create: {
            args: Prisma.SessionUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>
          }
          createMany: {
            args: Prisma.SessionUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>[]
          }
          delete: {
            args: Prisma.SessionUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>
          }
          update: {
            args: Prisma.SessionUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>
          }
          deleteMany: {
            args: Prisma.SessionUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>[]
          }
          upsert: {
            args: Prisma.SessionUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionUserPayload>
          }
          aggregate: {
            args: Prisma.SessionUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionUser>
          }
          groupBy: {
            args: Prisma.SessionUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionUserCountArgs<ExtArgs>
            result: $Utils.Optional<SessionUserCountAggregateOutputType> | number
          }
        }
      }
      AuthCode: {
        payload: Prisma.$AuthCodePayload<ExtArgs>
        fields: Prisma.AuthCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          findFirst: {
            args: Prisma.AuthCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          findMany: {
            args: Prisma.AuthCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>[]
          }
          create: {
            args: Prisma.AuthCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          createMany: {
            args: Prisma.AuthCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>[]
          }
          delete: {
            args: Prisma.AuthCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          update: {
            args: Prisma.AuthCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          deleteMany: {
            args: Prisma.AuthCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>[]
          }
          upsert: {
            args: Prisma.AuthCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthCodePayload>
          }
          aggregate: {
            args: Prisma.AuthCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthCode>
          }
          groupBy: {
            args: Prisma.AuthCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCodeCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    sessionUser?: SessionUserOmit
    authCode?: AuthCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    AuthCode: number
    SessionUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthCode?: boolean | UserCountOutputTypeCountAuthCodeArgs
    SessionUser?: boolean | UserCountOutputTypeCountSessionUserArgs
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
  export type UserCountOutputTypeCountAuthCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    surName: string | null
    lastName: string | null
    login: string | null
    createdAt: Date | null
    isActivated: boolean | null
    activatedEmailCode: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    surName: string | null
    lastName: string | null
    login: string | null
    createdAt: Date | null
    isActivated: boolean | null
    activatedEmailCode: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    surName: number
    lastName: number
    login: number
    createdAt: number
    isActivated: number
    activatedEmailCode: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surName?: true
    lastName?: true
    login?: true
    createdAt?: true
    isActivated?: true
    activatedEmailCode?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surName?: true
    lastName?: true
    login?: true
    createdAt?: true
    isActivated?: true
    activatedEmailCode?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surName?: true
    lastName?: true
    login?: true
    createdAt?: true
    isActivated?: true
    activatedEmailCode?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    surName: string | null
    lastName: string | null
    login: string
    createdAt: Date
    isActivated: boolean
    activatedEmailCode: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surName?: boolean
    lastName?: boolean
    login?: boolean
    createdAt?: boolean
    isActivated?: boolean
    activatedEmailCode?: boolean
    AuthCode?: boolean | User$AuthCodeArgs<ExtArgs>
    SessionUser?: boolean | User$SessionUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surName?: boolean
    lastName?: boolean
    login?: boolean
    createdAt?: boolean
    isActivated?: boolean
    activatedEmailCode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surName?: boolean
    lastName?: boolean
    login?: boolean
    createdAt?: boolean
    isActivated?: boolean
    activatedEmailCode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    surName?: boolean
    lastName?: boolean
    login?: boolean
    createdAt?: boolean
    isActivated?: boolean
    activatedEmailCode?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "surName" | "lastName" | "login" | "createdAt" | "isActivated" | "activatedEmailCode", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthCode?: boolean | User$AuthCodeArgs<ExtArgs>
    SessionUser?: boolean | User$SessionUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      AuthCode: Prisma.$AuthCodePayload<ExtArgs>[]
      SessionUser: Prisma.$SessionUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      surName: string | null
      lastName: string | null
      login: string
      createdAt: Date
      isActivated: boolean
      activatedEmailCode: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AuthCode<T extends User$AuthCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthCodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SessionUser<T extends User$SessionUserArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly login: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isActivated: FieldRef<"User", 'Boolean'>
    readonly activatedEmailCode: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.AuthCode
   */
  export type User$AuthCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    where?: AuthCodeWhereInput
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    cursor?: AuthCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * User.SessionUser
   */
  export type User$SessionUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    where?: SessionUserWhereInput
    orderBy?: SessionUserOrderByWithRelationInput | SessionUserOrderByWithRelationInput[]
    cursor?: SessionUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionUserScalarFieldEnum | SessionUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SessionUser
   */

  export type AggregateSessionUser = {
    _count: SessionUserCountAggregateOutputType | null
    _min: SessionUserMinAggregateOutputType | null
    _max: SessionUserMaxAggregateOutputType | null
  }

  export type SessionUserMinAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    userId: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isRevoked: boolean | null
  }

  export type SessionUserMaxAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    userId: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isRevoked: boolean | null
  }

  export type SessionUserCountAggregateOutputType = {
    id: number
    refreshToken: number
    userId: number
    ip: number
    userAgent: number
    createdAt: number
    expiresAt: number
    isRevoked: number
    _all: number
  }


  export type SessionUserMinAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    isRevoked?: true
  }

  export type SessionUserMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    isRevoked?: true
  }

  export type SessionUserCountAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    isRevoked?: true
    _all?: true
  }

  export type SessionUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionUser to aggregate.
     */
    where?: SessionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionUsers to fetch.
     */
    orderBy?: SessionUserOrderByWithRelationInput | SessionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionUsers
    **/
    _count?: true | SessionUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionUserMaxAggregateInputType
  }

  export type GetSessionUserAggregateType<T extends SessionUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionUser[P]>
      : GetScalarType<T[P], AggregateSessionUser[P]>
  }




  export type SessionUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionUserWhereInput
    orderBy?: SessionUserOrderByWithAggregationInput | SessionUserOrderByWithAggregationInput[]
    by: SessionUserScalarFieldEnum[] | SessionUserScalarFieldEnum
    having?: SessionUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionUserCountAggregateInputType | true
    _min?: SessionUserMinAggregateInputType
    _max?: SessionUserMaxAggregateInputType
  }

  export type SessionUserGroupByOutputType = {
    id: string
    refreshToken: string
    userId: string
    ip: string | null
    userAgent: string | null
    createdAt: Date
    expiresAt: Date
    isRevoked: boolean
    _count: SessionUserCountAggregateOutputType | null
    _min: SessionUserMinAggregateOutputType | null
    _max: SessionUserMaxAggregateOutputType | null
  }

  type GetSessionUserGroupByPayload<T extends SessionUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionUserGroupByOutputType[P]>
            : GetScalarType<T[P], SessionUserGroupByOutputType[P]>
        }
      >
    >


  export type SessionUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionUser"]>

  export type SessionUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionUser"]>

  export type SessionUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionUser"]>

  export type SessionUserSelectScalar = {
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
  }

  export type SessionUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refreshToken" | "userId" | "ip" | "userAgent" | "createdAt" | "expiresAt" | "isRevoked", ExtArgs["result"]["sessionUser"]>
  export type SessionUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refreshToken: string
      userId: string
      ip: string | null
      userAgent: string | null
      createdAt: Date
      expiresAt: Date
      isRevoked: boolean
    }, ExtArgs["result"]["sessionUser"]>
    composites: {}
  }

  type SessionUserGetPayload<S extends boolean | null | undefined | SessionUserDefaultArgs> = $Result.GetResult<Prisma.$SessionUserPayload, S>

  type SessionUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionUserCountAggregateInputType | true
    }

  export interface SessionUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionUser'], meta: { name: 'SessionUser' } }
    /**
     * Find zero or one SessionUser that matches the filter.
     * @param {SessionUserFindUniqueArgs} args - Arguments to find a SessionUser
     * @example
     * // Get one SessionUser
     * const sessionUser = await prisma.sessionUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionUserFindUniqueArgs>(args: SelectSubset<T, SessionUserFindUniqueArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionUserFindUniqueOrThrowArgs} args - Arguments to find a SessionUser
     * @example
     * // Get one SessionUser
     * const sessionUser = await prisma.sessionUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserFindFirstArgs} args - Arguments to find a SessionUser
     * @example
     * // Get one SessionUser
     * const sessionUser = await prisma.sessionUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionUserFindFirstArgs>(args?: SelectSubset<T, SessionUserFindFirstArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserFindFirstOrThrowArgs} args - Arguments to find a SessionUser
     * @example
     * // Get one SessionUser
     * const sessionUser = await prisma.sessionUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionUsers
     * const sessionUsers = await prisma.sessionUser.findMany()
     * 
     * // Get first 10 SessionUsers
     * const sessionUsers = await prisma.sessionUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionUserWithIdOnly = await prisma.sessionUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionUserFindManyArgs>(args?: SelectSubset<T, SessionUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionUser.
     * @param {SessionUserCreateArgs} args - Arguments to create a SessionUser.
     * @example
     * // Create one SessionUser
     * const SessionUser = await prisma.sessionUser.create({
     *   data: {
     *     // ... data to create a SessionUser
     *   }
     * })
     * 
     */
    create<T extends SessionUserCreateArgs>(args: SelectSubset<T, SessionUserCreateArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionUsers.
     * @param {SessionUserCreateManyArgs} args - Arguments to create many SessionUsers.
     * @example
     * // Create many SessionUsers
     * const sessionUser = await prisma.sessionUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionUserCreateManyArgs>(args?: SelectSubset<T, SessionUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionUsers and returns the data saved in the database.
     * @param {SessionUserCreateManyAndReturnArgs} args - Arguments to create many SessionUsers.
     * @example
     * // Create many SessionUsers
     * const sessionUser = await prisma.sessionUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionUsers and only return the `id`
     * const sessionUserWithIdOnly = await prisma.sessionUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionUser.
     * @param {SessionUserDeleteArgs} args - Arguments to delete one SessionUser.
     * @example
     * // Delete one SessionUser
     * const SessionUser = await prisma.sessionUser.delete({
     *   where: {
     *     // ... filter to delete one SessionUser
     *   }
     * })
     * 
     */
    delete<T extends SessionUserDeleteArgs>(args: SelectSubset<T, SessionUserDeleteArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionUser.
     * @param {SessionUserUpdateArgs} args - Arguments to update one SessionUser.
     * @example
     * // Update one SessionUser
     * const sessionUser = await prisma.sessionUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUserUpdateArgs>(args: SelectSubset<T, SessionUserUpdateArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionUsers.
     * @param {SessionUserDeleteManyArgs} args - Arguments to filter SessionUsers to delete.
     * @example
     * // Delete a few SessionUsers
     * const { count } = await prisma.sessionUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionUserDeleteManyArgs>(args?: SelectSubset<T, SessionUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionUsers
     * const sessionUser = await prisma.sessionUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUserUpdateManyArgs>(args: SelectSubset<T, SessionUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionUsers and returns the data updated in the database.
     * @param {SessionUserUpdateManyAndReturnArgs} args - Arguments to update many SessionUsers.
     * @example
     * // Update many SessionUsers
     * const sessionUser = await prisma.sessionUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionUsers and only return the `id`
     * const sessionUserWithIdOnly = await prisma.sessionUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionUser.
     * @param {SessionUserUpsertArgs} args - Arguments to update or create a SessionUser.
     * @example
     * // Update or create a SessionUser
     * const sessionUser = await prisma.sessionUser.upsert({
     *   create: {
     *     // ... data to create a SessionUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionUser we want to update
     *   }
     * })
     */
    upsert<T extends SessionUserUpsertArgs>(args: SelectSubset<T, SessionUserUpsertArgs<ExtArgs>>): Prisma__SessionUserClient<$Result.GetResult<Prisma.$SessionUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserCountArgs} args - Arguments to filter SessionUsers to count.
     * @example
     * // Count the number of SessionUsers
     * const count = await prisma.sessionUser.count({
     *   where: {
     *     // ... the filter for the SessionUsers we want to count
     *   }
     * })
    **/
    count<T extends SessionUserCountArgs>(
      args?: Subset<T, SessionUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionUserAggregateArgs>(args: Subset<T, SessionUserAggregateArgs>): Prisma.PrismaPromise<GetSessionUserAggregateType<T>>

    /**
     * Group by SessionUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUserGroupByArgs} args - Group by arguments.
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
      T extends SessionUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionUserGroupByArgs['orderBy'] }
        : { orderBy?: SessionUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionUser model
   */
  readonly fields: SessionUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionUser model
   */
  interface SessionUserFieldRefs {
    readonly id: FieldRef<"SessionUser", 'String'>
    readonly refreshToken: FieldRef<"SessionUser", 'String'>
    readonly userId: FieldRef<"SessionUser", 'String'>
    readonly ip: FieldRef<"SessionUser", 'String'>
    readonly userAgent: FieldRef<"SessionUser", 'String'>
    readonly createdAt: FieldRef<"SessionUser", 'DateTime'>
    readonly expiresAt: FieldRef<"SessionUser", 'DateTime'>
    readonly isRevoked: FieldRef<"SessionUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SessionUser findUnique
   */
  export type SessionUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * Filter, which SessionUser to fetch.
     */
    where: SessionUserWhereUniqueInput
  }

  /**
   * SessionUser findUniqueOrThrow
   */
  export type SessionUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * Filter, which SessionUser to fetch.
     */
    where: SessionUserWhereUniqueInput
  }

  /**
   * SessionUser findFirst
   */
  export type SessionUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * Filter, which SessionUser to fetch.
     */
    where?: SessionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionUsers to fetch.
     */
    orderBy?: SessionUserOrderByWithRelationInput | SessionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionUsers.
     */
    cursor?: SessionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionUsers.
     */
    distinct?: SessionUserScalarFieldEnum | SessionUserScalarFieldEnum[]
  }

  /**
   * SessionUser findFirstOrThrow
   */
  export type SessionUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * Filter, which SessionUser to fetch.
     */
    where?: SessionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionUsers to fetch.
     */
    orderBy?: SessionUserOrderByWithRelationInput | SessionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionUsers.
     */
    cursor?: SessionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionUsers.
     */
    distinct?: SessionUserScalarFieldEnum | SessionUserScalarFieldEnum[]
  }

  /**
   * SessionUser findMany
   */
  export type SessionUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * Filter, which SessionUsers to fetch.
     */
    where?: SessionUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionUsers to fetch.
     */
    orderBy?: SessionUserOrderByWithRelationInput | SessionUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionUsers.
     */
    cursor?: SessionUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionUsers.
     */
    skip?: number
    distinct?: SessionUserScalarFieldEnum | SessionUserScalarFieldEnum[]
  }

  /**
   * SessionUser create
   */
  export type SessionUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionUser.
     */
    data: XOR<SessionUserCreateInput, SessionUserUncheckedCreateInput>
  }

  /**
   * SessionUser createMany
   */
  export type SessionUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionUsers.
     */
    data: SessionUserCreateManyInput | SessionUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionUser createManyAndReturn
   */
  export type SessionUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * The data used to create many SessionUsers.
     */
    data: SessionUserCreateManyInput | SessionUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionUser update
   */
  export type SessionUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionUser.
     */
    data: XOR<SessionUserUpdateInput, SessionUserUncheckedUpdateInput>
    /**
     * Choose, which SessionUser to update.
     */
    where: SessionUserWhereUniqueInput
  }

  /**
   * SessionUser updateMany
   */
  export type SessionUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionUsers.
     */
    data: XOR<SessionUserUpdateManyMutationInput, SessionUserUncheckedUpdateManyInput>
    /**
     * Filter which SessionUsers to update
     */
    where?: SessionUserWhereInput
    /**
     * Limit how many SessionUsers to update.
     */
    limit?: number
  }

  /**
   * SessionUser updateManyAndReturn
   */
  export type SessionUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * The data used to update SessionUsers.
     */
    data: XOR<SessionUserUpdateManyMutationInput, SessionUserUncheckedUpdateManyInput>
    /**
     * Filter which SessionUsers to update
     */
    where?: SessionUserWhereInput
    /**
     * Limit how many SessionUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionUser upsert
   */
  export type SessionUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionUser to update in case it exists.
     */
    where: SessionUserWhereUniqueInput
    /**
     * In case the SessionUser found by the `where` argument doesn't exist, create a new SessionUser with this data.
     */
    create: XOR<SessionUserCreateInput, SessionUserUncheckedCreateInput>
    /**
     * In case the SessionUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUserUpdateInput, SessionUserUncheckedUpdateInput>
  }

  /**
   * SessionUser delete
   */
  export type SessionUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
    /**
     * Filter which SessionUser to delete.
     */
    where: SessionUserWhereUniqueInput
  }

  /**
   * SessionUser deleteMany
   */
  export type SessionUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionUsers to delete
     */
    where?: SessionUserWhereInput
    /**
     * Limit how many SessionUsers to delete.
     */
    limit?: number
  }

  /**
   * SessionUser without action
   */
  export type SessionUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionUser
     */
    select?: SessionUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionUser
     */
    omit?: SessionUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionUserInclude<ExtArgs> | null
  }


  /**
   * Model AuthCode
   */

  export type AggregateAuthCode = {
    _count: AuthCodeCountAggregateOutputType | null
    _avg: AuthCodeAvgAggregateOutputType | null
    _sum: AuthCodeSumAggregateOutputType | null
    _min: AuthCodeMinAggregateOutputType | null
    _max: AuthCodeMaxAggregateOutputType | null
  }

  export type AuthCodeAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthCodeSumAggregateOutputType = {
    id: number | null
  }

  export type AuthCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    userId: string | null
    type: string | null
    isUsed: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type AuthCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    userId: string | null
    type: string | null
    isUsed: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type AuthCodeCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    type: number
    isUsed: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type AuthCodeAvgAggregateInputType = {
    id?: true
  }

  export type AuthCodeSumAggregateInputType = {
    id?: true
  }

  export type AuthCodeMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    type?: true
    isUsed?: true
    expiresAt?: true
    createdAt?: true
  }

  export type AuthCodeMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    type?: true
    isUsed?: true
    expiresAt?: true
    createdAt?: true
  }

  export type AuthCodeCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    type?: true
    isUsed?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type AuthCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthCode to aggregate.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthCodes
    **/
    _count?: true | AuthCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthCodeMaxAggregateInputType
  }

  export type GetAuthCodeAggregateType<T extends AuthCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthCode[P]>
      : GetScalarType<T[P], AggregateAuthCode[P]>
  }




  export type AuthCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthCodeWhereInput
    orderBy?: AuthCodeOrderByWithAggregationInput | AuthCodeOrderByWithAggregationInput[]
    by: AuthCodeScalarFieldEnum[] | AuthCodeScalarFieldEnum
    having?: AuthCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCodeCountAggregateInputType | true
    _avg?: AuthCodeAvgAggregateInputType
    _sum?: AuthCodeSumAggregateInputType
    _min?: AuthCodeMinAggregateInputType
    _max?: AuthCodeMaxAggregateInputType
  }

  export type AuthCodeGroupByOutputType = {
    id: number
    code: string
    userId: string
    type: string
    isUsed: boolean
    expiresAt: Date
    createdAt: Date
    _count: AuthCodeCountAggregateOutputType | null
    _avg: AuthCodeAvgAggregateOutputType | null
    _sum: AuthCodeSumAggregateOutputType | null
    _min: AuthCodeMinAggregateOutputType | null
    _max: AuthCodeMaxAggregateOutputType | null
  }

  type GetAuthCodeGroupByPayload<T extends AuthCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthCodeGroupByOutputType[P]>
            : GetScalarType<T[P], AuthCodeGroupByOutputType[P]>
        }
      >
    >


  export type AuthCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    type?: boolean
    isUsed?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authCode"]>

  export type AuthCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    type?: boolean
    isUsed?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authCode"]>

  export type AuthCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    type?: boolean
    isUsed?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authCode"]>

  export type AuthCodeSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    type?: boolean
    isUsed?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type AuthCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "userId" | "type" | "isUsed" | "expiresAt" | "createdAt", ExtArgs["result"]["authCode"]>
  export type AuthCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      userId: string
      type: string
      isUsed: boolean
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["authCode"]>
    composites: {}
  }

  type AuthCodeGetPayload<S extends boolean | null | undefined | AuthCodeDefaultArgs> = $Result.GetResult<Prisma.$AuthCodePayload, S>

  type AuthCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCodeCountAggregateInputType | true
    }

  export interface AuthCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthCode'], meta: { name: 'AuthCode' } }
    /**
     * Find zero or one AuthCode that matches the filter.
     * @param {AuthCodeFindUniqueArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthCodeFindUniqueArgs>(args: SelectSubset<T, AuthCodeFindUniqueArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthCodeFindUniqueOrThrowArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeFindFirstArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthCodeFindFirstArgs>(args?: SelectSubset<T, AuthCodeFindFirstArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeFindFirstOrThrowArgs} args - Arguments to find a AuthCode
     * @example
     * // Get one AuthCode
     * const authCode = await prisma.authCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthCodes
     * const authCodes = await prisma.authCode.findMany()
     * 
     * // Get first 10 AuthCodes
     * const authCodes = await prisma.authCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authCodeWithIdOnly = await prisma.authCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthCodeFindManyArgs>(args?: SelectSubset<T, AuthCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthCode.
     * @param {AuthCodeCreateArgs} args - Arguments to create a AuthCode.
     * @example
     * // Create one AuthCode
     * const AuthCode = await prisma.authCode.create({
     *   data: {
     *     // ... data to create a AuthCode
     *   }
     * })
     * 
     */
    create<T extends AuthCodeCreateArgs>(args: SelectSubset<T, AuthCodeCreateArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthCodes.
     * @param {AuthCodeCreateManyArgs} args - Arguments to create many AuthCodes.
     * @example
     * // Create many AuthCodes
     * const authCode = await prisma.authCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCodeCreateManyArgs>(args?: SelectSubset<T, AuthCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthCodes and returns the data saved in the database.
     * @param {AuthCodeCreateManyAndReturnArgs} args - Arguments to create many AuthCodes.
     * @example
     * // Create many AuthCodes
     * const authCode = await prisma.authCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthCodes and only return the `id`
     * const authCodeWithIdOnly = await prisma.authCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthCode.
     * @param {AuthCodeDeleteArgs} args - Arguments to delete one AuthCode.
     * @example
     * // Delete one AuthCode
     * const AuthCode = await prisma.authCode.delete({
     *   where: {
     *     // ... filter to delete one AuthCode
     *   }
     * })
     * 
     */
    delete<T extends AuthCodeDeleteArgs>(args: SelectSubset<T, AuthCodeDeleteArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthCode.
     * @param {AuthCodeUpdateArgs} args - Arguments to update one AuthCode.
     * @example
     * // Update one AuthCode
     * const authCode = await prisma.authCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthCodeUpdateArgs>(args: SelectSubset<T, AuthCodeUpdateArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthCodes.
     * @param {AuthCodeDeleteManyArgs} args - Arguments to filter AuthCodes to delete.
     * @example
     * // Delete a few AuthCodes
     * const { count } = await prisma.authCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthCodeDeleteManyArgs>(args?: SelectSubset<T, AuthCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthCodes
     * const authCode = await prisma.authCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthCodeUpdateManyArgs>(args: SelectSubset<T, AuthCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthCodes and returns the data updated in the database.
     * @param {AuthCodeUpdateManyAndReturnArgs} args - Arguments to update many AuthCodes.
     * @example
     * // Update many AuthCodes
     * const authCode = await prisma.authCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthCodes and only return the `id`
     * const authCodeWithIdOnly = await prisma.authCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthCode.
     * @param {AuthCodeUpsertArgs} args - Arguments to update or create a AuthCode.
     * @example
     * // Update or create a AuthCode
     * const authCode = await prisma.authCode.upsert({
     *   create: {
     *     // ... data to create a AuthCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthCode we want to update
     *   }
     * })
     */
    upsert<T extends AuthCodeUpsertArgs>(args: SelectSubset<T, AuthCodeUpsertArgs<ExtArgs>>): Prisma__AuthCodeClient<$Result.GetResult<Prisma.$AuthCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeCountArgs} args - Arguments to filter AuthCodes to count.
     * @example
     * // Count the number of AuthCodes
     * const count = await prisma.authCode.count({
     *   where: {
     *     // ... the filter for the AuthCodes we want to count
     *   }
     * })
    **/
    count<T extends AuthCodeCountArgs>(
      args?: Subset<T, AuthCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthCodeAggregateArgs>(args: Subset<T, AuthCodeAggregateArgs>): Prisma.PrismaPromise<GetAuthCodeAggregateType<T>>

    /**
     * Group by AuthCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCodeGroupByArgs} args - Group by arguments.
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
      T extends AuthCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthCodeGroupByArgs['orderBy'] }
        : { orderBy?: AuthCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthCode model
   */
  readonly fields: AuthCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthCode model
   */
  interface AuthCodeFieldRefs {
    readonly id: FieldRef<"AuthCode", 'Int'>
    readonly code: FieldRef<"AuthCode", 'String'>
    readonly userId: FieldRef<"AuthCode", 'String'>
    readonly type: FieldRef<"AuthCode", 'String'>
    readonly isUsed: FieldRef<"AuthCode", 'Boolean'>
    readonly expiresAt: FieldRef<"AuthCode", 'DateTime'>
    readonly createdAt: FieldRef<"AuthCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthCode findUnique
   */
  export type AuthCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode findUniqueOrThrow
   */
  export type AuthCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode findFirst
   */
  export type AuthCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthCodes.
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthCodes.
     */
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * AuthCode findFirstOrThrow
   */
  export type AuthCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCode to fetch.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthCodes.
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthCodes.
     */
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * AuthCode findMany
   */
  export type AuthCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter, which AuthCodes to fetch.
     */
    where?: AuthCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthCodes to fetch.
     */
    orderBy?: AuthCodeOrderByWithRelationInput | AuthCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthCodes.
     */
    cursor?: AuthCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthCodes.
     */
    skip?: number
    distinct?: AuthCodeScalarFieldEnum | AuthCodeScalarFieldEnum[]
  }

  /**
   * AuthCode create
   */
  export type AuthCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthCode.
     */
    data: XOR<AuthCodeCreateInput, AuthCodeUncheckedCreateInput>
  }

  /**
   * AuthCode createMany
   */
  export type AuthCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthCodes.
     */
    data: AuthCodeCreateManyInput | AuthCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthCode createManyAndReturn
   */
  export type AuthCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * The data used to create many AuthCodes.
     */
    data: AuthCodeCreateManyInput | AuthCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthCode update
   */
  export type AuthCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthCode.
     */
    data: XOR<AuthCodeUpdateInput, AuthCodeUncheckedUpdateInput>
    /**
     * Choose, which AuthCode to update.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode updateMany
   */
  export type AuthCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthCodes.
     */
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyInput>
    /**
     * Filter which AuthCodes to update
     */
    where?: AuthCodeWhereInput
    /**
     * Limit how many AuthCodes to update.
     */
    limit?: number
  }

  /**
   * AuthCode updateManyAndReturn
   */
  export type AuthCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * The data used to update AuthCodes.
     */
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyInput>
    /**
     * Filter which AuthCodes to update
     */
    where?: AuthCodeWhereInput
    /**
     * Limit how many AuthCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthCode upsert
   */
  export type AuthCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthCode to update in case it exists.
     */
    where: AuthCodeWhereUniqueInput
    /**
     * In case the AuthCode found by the `where` argument doesn't exist, create a new AuthCode with this data.
     */
    create: XOR<AuthCodeCreateInput, AuthCodeUncheckedCreateInput>
    /**
     * In case the AuthCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthCodeUpdateInput, AuthCodeUncheckedUpdateInput>
  }

  /**
   * AuthCode delete
   */
  export type AuthCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
    /**
     * Filter which AuthCode to delete.
     */
    where: AuthCodeWhereUniqueInput
  }

  /**
   * AuthCode deleteMany
   */
  export type AuthCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthCodes to delete
     */
    where?: AuthCodeWhereInput
    /**
     * Limit how many AuthCodes to delete.
     */
    limit?: number
  }

  /**
   * AuthCode without action
   */
  export type AuthCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCode
     */
    select?: AuthCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthCode
     */
    omit?: AuthCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthCodeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    surName: 'surName',
    lastName: 'lastName',
    login: 'login',
    createdAt: 'createdAt',
    isActivated: 'isActivated',
    activatedEmailCode: 'activatedEmailCode'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionUserScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    userId: 'userId',
    ip: 'ip',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isRevoked: 'isRevoked'
  };

  export type SessionUserScalarFieldEnum = (typeof SessionUserScalarFieldEnum)[keyof typeof SessionUserScalarFieldEnum]


  export const AuthCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    type: 'type',
    isUsed: 'isUsed',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type AuthCodeScalarFieldEnum = (typeof AuthCodeScalarFieldEnum)[keyof typeof AuthCodeScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    login?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActivated?: BoolFilter<"User"> | boolean
    activatedEmailCode?: StringFilter<"User"> | string
    AuthCode?: AuthCodeListRelationFilter
    SessionUser?: SessionUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    login?: SortOrder
    createdAt?: SortOrder
    isActivated?: SortOrder
    activatedEmailCode?: SortOrder
    AuthCode?: AuthCodeOrderByRelationAggregateInput
    SessionUser?: SessionUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    login?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    surName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActivated?: BoolFilter<"User"> | boolean
    activatedEmailCode?: StringFilter<"User"> | string
    AuthCode?: AuthCodeListRelationFilter
    SessionUser?: SessionUserListRelationFilter
  }, "id" | "email" | "login">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    login?: SortOrder
    createdAt?: SortOrder
    isActivated?: SortOrder
    activatedEmailCode?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    login?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActivated?: BoolWithAggregatesFilter<"User"> | boolean
    activatedEmailCode?: StringWithAggregatesFilter<"User"> | string
  }

  export type SessionUserWhereInput = {
    AND?: SessionUserWhereInput | SessionUserWhereInput[]
    OR?: SessionUserWhereInput[]
    NOT?: SessionUserWhereInput | SessionUserWhereInput[]
    id?: StringFilter<"SessionUser"> | string
    refreshToken?: StringFilter<"SessionUser"> | string
    userId?: StringFilter<"SessionUser"> | string
    ip?: StringNullableFilter<"SessionUser"> | string | null
    userAgent?: StringNullableFilter<"SessionUser"> | string | null
    createdAt?: DateTimeFilter<"SessionUser"> | Date | string
    expiresAt?: DateTimeFilter<"SessionUser"> | Date | string
    isRevoked?: BoolFilter<"SessionUser"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionUserOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionUserWhereInput | SessionUserWhereInput[]
    OR?: SessionUserWhereInput[]
    NOT?: SessionUserWhereInput | SessionUserWhereInput[]
    refreshToken?: StringFilter<"SessionUser"> | string
    userId?: StringFilter<"SessionUser"> | string
    ip?: StringNullableFilter<"SessionUser"> | string | null
    userAgent?: StringNullableFilter<"SessionUser"> | string | null
    createdAt?: DateTimeFilter<"SessionUser"> | Date | string
    expiresAt?: DateTimeFilter<"SessionUser"> | Date | string
    isRevoked?: BoolFilter<"SessionUser"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionUserOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    _count?: SessionUserCountOrderByAggregateInput
    _max?: SessionUserMaxOrderByAggregateInput
    _min?: SessionUserMinOrderByAggregateInput
  }

  export type SessionUserScalarWhereWithAggregatesInput = {
    AND?: SessionUserScalarWhereWithAggregatesInput | SessionUserScalarWhereWithAggregatesInput[]
    OR?: SessionUserScalarWhereWithAggregatesInput[]
    NOT?: SessionUserScalarWhereWithAggregatesInput | SessionUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionUser"> | string
    refreshToken?: StringWithAggregatesFilter<"SessionUser"> | string
    userId?: StringWithAggregatesFilter<"SessionUser"> | string
    ip?: StringNullableWithAggregatesFilter<"SessionUser"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"SessionUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SessionUser"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"SessionUser"> | Date | string
    isRevoked?: BoolWithAggregatesFilter<"SessionUser"> | boolean
  }

  export type AuthCodeWhereInput = {
    AND?: AuthCodeWhereInput | AuthCodeWhereInput[]
    OR?: AuthCodeWhereInput[]
    NOT?: AuthCodeWhereInput | AuthCodeWhereInput[]
    id?: IntFilter<"AuthCode"> | number
    code?: StringFilter<"AuthCode"> | string
    userId?: StringFilter<"AuthCode"> | string
    type?: StringFilter<"AuthCode"> | string
    isUsed?: BoolFilter<"AuthCode"> | boolean
    expiresAt?: DateTimeFilter<"AuthCode"> | Date | string
    createdAt?: DateTimeFilter<"AuthCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isUsed?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthCodeWhereInput | AuthCodeWhereInput[]
    OR?: AuthCodeWhereInput[]
    NOT?: AuthCodeWhereInput | AuthCodeWhereInput[]
    code?: StringFilter<"AuthCode"> | string
    userId?: StringFilter<"AuthCode"> | string
    type?: StringFilter<"AuthCode"> | string
    isUsed?: BoolFilter<"AuthCode"> | boolean
    expiresAt?: DateTimeFilter<"AuthCode"> | Date | string
    createdAt?: DateTimeFilter<"AuthCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuthCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isUsed?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: AuthCodeCountOrderByAggregateInput
    _avg?: AuthCodeAvgOrderByAggregateInput
    _max?: AuthCodeMaxOrderByAggregateInput
    _min?: AuthCodeMinOrderByAggregateInput
    _sum?: AuthCodeSumOrderByAggregateInput
  }

  export type AuthCodeScalarWhereWithAggregatesInput = {
    AND?: AuthCodeScalarWhereWithAggregatesInput | AuthCodeScalarWhereWithAggregatesInput[]
    OR?: AuthCodeScalarWhereWithAggregatesInput[]
    NOT?: AuthCodeScalarWhereWithAggregatesInput | AuthCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuthCode"> | number
    code?: StringWithAggregatesFilter<"AuthCode"> | string
    userId?: StringWithAggregatesFilter<"AuthCode"> | string
    type?: StringWithAggregatesFilter<"AuthCode"> | string
    isUsed?: BoolWithAggregatesFilter<"AuthCode"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"AuthCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthCode"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    AuthCode?: AuthCodeCreateNestedManyWithoutUserInput
    SessionUser?: SessionUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    AuthCode?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
    SessionUser?: SessionUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    AuthCode?: AuthCodeUpdateManyWithoutUserNestedInput
    SessionUser?: SessionUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    AuthCode?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
    SessionUser?: SessionUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUserCreateInput = {
    id?: string
    refreshToken: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    isRevoked?: boolean
    user: UserCreateNestedOneWithoutSessionUserInput
  }

  export type SessionUserUncheckedCreateInput = {
    id?: string
    refreshToken: string
    userId: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    isRevoked?: boolean
  }

  export type SessionUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSessionUserNestedInput
  }

  export type SessionUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUserCreateManyInput = {
    id?: string
    refreshToken: string
    userId: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    isRevoked?: boolean
  }

  export type SessionUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthCodeCreateInput = {
    code: string
    type: string
    isUsed?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthCodeInput
  }

  export type AuthCodeUncheckedCreateInput = {
    id?: number
    code: string
    userId: string
    type: string
    isUsed?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthCodeNestedInput
  }

  export type AuthCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeCreateManyInput = {
    id?: number
    code: string
    userId: string
    type: string
    isUsed?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthCodeListRelationFilter = {
    every?: AuthCodeWhereInput
    some?: AuthCodeWhereInput
    none?: AuthCodeWhereInput
  }

  export type SessionUserListRelationFilter = {
    every?: SessionUserWhereInput
    some?: SessionUserWhereInput
    none?: SessionUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    lastName?: SortOrder
    login?: SortOrder
    createdAt?: SortOrder
    isActivated?: SortOrder
    activatedEmailCode?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    lastName?: SortOrder
    login?: SortOrder
    createdAt?: SortOrder
    isActivated?: SortOrder
    activatedEmailCode?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    lastName?: SortOrder
    login?: SortOrder
    createdAt?: SortOrder
    isActivated?: SortOrder
    activatedEmailCode?: SortOrder
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
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionUserCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
  }

  export type SessionUserMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
  }

  export type SessionUserMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
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

  export type AuthCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isUsed?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthCodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isUsed?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isUsed?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthCodeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AuthCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
  }

  export type SessionUserCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionUserCreateWithoutUserInput, SessionUserUncheckedCreateWithoutUserInput> | SessionUserCreateWithoutUserInput[] | SessionUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionUserCreateOrConnectWithoutUserInput | SessionUserCreateOrConnectWithoutUserInput[]
    createMany?: SessionUserCreateManyUserInputEnvelope
    connect?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
  }

  export type AuthCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
  }

  export type SessionUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionUserCreateWithoutUserInput, SessionUserUncheckedCreateWithoutUserInput> | SessionUserCreateWithoutUserInput[] | SessionUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionUserCreateOrConnectWithoutUserInput | SessionUserCreateOrConnectWithoutUserInput[]
    createMany?: SessionUserCreateManyUserInputEnvelope
    connect?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AuthCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    upsert?: AuthCodeUpsertWithWhereUniqueWithoutUserInput | AuthCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    set?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    disconnect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    delete?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    update?: AuthCodeUpdateWithWhereUniqueWithoutUserInput | AuthCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthCodeUpdateManyWithWhereWithoutUserInput | AuthCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
  }

  export type SessionUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionUserCreateWithoutUserInput, SessionUserUncheckedCreateWithoutUserInput> | SessionUserCreateWithoutUserInput[] | SessionUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionUserCreateOrConnectWithoutUserInput | SessionUserCreateOrConnectWithoutUserInput[]
    upsert?: SessionUserUpsertWithWhereUniqueWithoutUserInput | SessionUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionUserCreateManyUserInputEnvelope
    set?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    disconnect?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    delete?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    connect?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    update?: SessionUserUpdateWithWhereUniqueWithoutUserInput | SessionUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUserUpdateManyWithWhereWithoutUserInput | SessionUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionUserScalarWhereInput | SessionUserScalarWhereInput[]
  }

  export type AuthCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput> | AuthCodeCreateWithoutUserInput[] | AuthCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthCodeCreateOrConnectWithoutUserInput | AuthCodeCreateOrConnectWithoutUserInput[]
    upsert?: AuthCodeUpsertWithWhereUniqueWithoutUserInput | AuthCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthCodeCreateManyUserInputEnvelope
    set?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    disconnect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    delete?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    connect?: AuthCodeWhereUniqueInput | AuthCodeWhereUniqueInput[]
    update?: AuthCodeUpdateWithWhereUniqueWithoutUserInput | AuthCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthCodeUpdateManyWithWhereWithoutUserInput | AuthCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
  }

  export type SessionUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionUserCreateWithoutUserInput, SessionUserUncheckedCreateWithoutUserInput> | SessionUserCreateWithoutUserInput[] | SessionUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionUserCreateOrConnectWithoutUserInput | SessionUserCreateOrConnectWithoutUserInput[]
    upsert?: SessionUserUpsertWithWhereUniqueWithoutUserInput | SessionUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionUserCreateManyUserInputEnvelope
    set?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    disconnect?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    delete?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    connect?: SessionUserWhereUniqueInput | SessionUserWhereUniqueInput[]
    update?: SessionUserUpdateWithWhereUniqueWithoutUserInput | SessionUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUserUpdateManyWithWhereWithoutUserInput | SessionUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionUserScalarWhereInput | SessionUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionUserInput = {
    create?: XOR<UserCreateWithoutSessionUserInput, UserUncheckedCreateWithoutSessionUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionUserNestedInput = {
    create?: XOR<UserCreateWithoutSessionUserInput, UserUncheckedCreateWithoutSessionUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionUserInput
    upsert?: UserUpsertWithoutSessionUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionUserInput, UserUpdateWithoutSessionUserInput>, UserUncheckedUpdateWithoutSessionUserInput>
  }

  export type UserCreateNestedOneWithoutAuthCodeInput = {
    create?: XOR<UserCreateWithoutAuthCodeInput, UserUncheckedCreateWithoutAuthCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthCodeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthCodeNestedInput = {
    create?: XOR<UserCreateWithoutAuthCodeInput, UserUncheckedCreateWithoutAuthCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthCodeInput
    upsert?: UserUpsertWithoutAuthCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthCodeInput, UserUpdateWithoutAuthCodeInput>, UserUncheckedUpdateWithoutAuthCodeInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AuthCodeCreateWithoutUserInput = {
    code: string
    type: string
    isUsed?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthCodeUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    type: string
    isUsed?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuthCodeCreateOrConnectWithoutUserInput = {
    where: AuthCodeWhereUniqueInput
    create: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput>
  }

  export type AuthCodeCreateManyUserInputEnvelope = {
    data: AuthCodeCreateManyUserInput | AuthCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUserCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    isRevoked?: boolean
  }

  export type SessionUserUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    isRevoked?: boolean
  }

  export type SessionUserCreateOrConnectWithoutUserInput = {
    where: SessionUserWhereUniqueInput
    create: XOR<SessionUserCreateWithoutUserInput, SessionUserUncheckedCreateWithoutUserInput>
  }

  export type SessionUserCreateManyUserInputEnvelope = {
    data: SessionUserCreateManyUserInput | SessionUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthCodeWhereUniqueInput
    update: XOR<AuthCodeUpdateWithoutUserInput, AuthCodeUncheckedUpdateWithoutUserInput>
    create: XOR<AuthCodeCreateWithoutUserInput, AuthCodeUncheckedCreateWithoutUserInput>
  }

  export type AuthCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthCodeWhereUniqueInput
    data: XOR<AuthCodeUpdateWithoutUserInput, AuthCodeUncheckedUpdateWithoutUserInput>
  }

  export type AuthCodeUpdateManyWithWhereWithoutUserInput = {
    where: AuthCodeScalarWhereInput
    data: XOR<AuthCodeUpdateManyMutationInput, AuthCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthCodeScalarWhereInput = {
    AND?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
    OR?: AuthCodeScalarWhereInput[]
    NOT?: AuthCodeScalarWhereInput | AuthCodeScalarWhereInput[]
    id?: IntFilter<"AuthCode"> | number
    code?: StringFilter<"AuthCode"> | string
    userId?: StringFilter<"AuthCode"> | string
    type?: StringFilter<"AuthCode"> | string
    isUsed?: BoolFilter<"AuthCode"> | boolean
    expiresAt?: DateTimeFilter<"AuthCode"> | Date | string
    createdAt?: DateTimeFilter<"AuthCode"> | Date | string
  }

  export type SessionUserUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionUserWhereUniqueInput
    update: XOR<SessionUserUpdateWithoutUserInput, SessionUserUncheckedUpdateWithoutUserInput>
    create: XOR<SessionUserCreateWithoutUserInput, SessionUserUncheckedCreateWithoutUserInput>
  }

  export type SessionUserUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionUserWhereUniqueInput
    data: XOR<SessionUserUpdateWithoutUserInput, SessionUserUncheckedUpdateWithoutUserInput>
  }

  export type SessionUserUpdateManyWithWhereWithoutUserInput = {
    where: SessionUserScalarWhereInput
    data: XOR<SessionUserUpdateManyMutationInput, SessionUserUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionUserScalarWhereInput = {
    AND?: SessionUserScalarWhereInput | SessionUserScalarWhereInput[]
    OR?: SessionUserScalarWhereInput[]
    NOT?: SessionUserScalarWhereInput | SessionUserScalarWhereInput[]
    id?: StringFilter<"SessionUser"> | string
    refreshToken?: StringFilter<"SessionUser"> | string
    userId?: StringFilter<"SessionUser"> | string
    ip?: StringNullableFilter<"SessionUser"> | string | null
    userAgent?: StringNullableFilter<"SessionUser"> | string | null
    createdAt?: DateTimeFilter<"SessionUser"> | Date | string
    expiresAt?: DateTimeFilter<"SessionUser"> | Date | string
    isRevoked?: BoolFilter<"SessionUser"> | boolean
  }

  export type UserCreateWithoutSessionUserInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    AuthCode?: AuthCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionUserInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    AuthCode?: AuthCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionUserInput, UserUncheckedCreateWithoutSessionUserInput>
  }

  export type UserUpsertWithoutSessionUserInput = {
    update: XOR<UserUpdateWithoutSessionUserInput, UserUncheckedUpdateWithoutSessionUserInput>
    create: XOR<UserCreateWithoutSessionUserInput, UserUncheckedCreateWithoutSessionUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionUserInput, UserUncheckedUpdateWithoutSessionUserInput>
  }

  export type UserUpdateWithoutSessionUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    AuthCode?: AuthCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    AuthCode?: AuthCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthCodeInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    SessionUser?: SessionUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthCodeInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    SessionUser?: SessionUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthCodeInput, UserUncheckedCreateWithoutAuthCodeInput>
  }

  export type UserUpsertWithoutAuthCodeInput = {
    update: XOR<UserUpdateWithoutAuthCodeInput, UserUncheckedUpdateWithoutAuthCodeInput>
    create: XOR<UserCreateWithoutAuthCodeInput, UserUncheckedCreateWithoutAuthCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthCodeInput, UserUncheckedUpdateWithoutAuthCodeInput>
  }

  export type UserUpdateWithoutAuthCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    SessionUser?: SessionUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    SessionUser?: SessionUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthCodeCreateManyUserInput = {
    id?: number
    code: string
    type: string
    isUsed?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUserCreateManyUserInput = {
    id?: string
    refreshToken: string
    ip?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    isRevoked?: boolean
  }

  export type AuthCodeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
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
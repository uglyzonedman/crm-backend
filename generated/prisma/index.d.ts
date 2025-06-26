
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
 * Model RecoveryPasswordCode
 * 
 */
export type RecoveryPasswordCode = $Result.DefaultSelection<Prisma.$RecoveryPasswordCodePayload>

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
   * `prisma.recoveryPasswordCode`: Exposes CRUD operations for the **RecoveryPasswordCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecoveryPasswordCodes
    * const recoveryPasswordCodes = await prisma.recoveryPasswordCode.findMany()
    * ```
    */
  get recoveryPasswordCode(): Prisma.RecoveryPasswordCodeDelegate<ExtArgs, ClientOptions>;
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
    RecoveryPasswordCode: 'RecoveryPasswordCode'
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
      modelProps: "user" | "recoveryPasswordCode"
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
      RecoveryPasswordCode: {
        payload: Prisma.$RecoveryPasswordCodePayload<ExtArgs>
        fields: Prisma.RecoveryPasswordCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecoveryPasswordCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecoveryPasswordCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>
          }
          findFirst: {
            args: Prisma.RecoveryPasswordCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecoveryPasswordCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>
          }
          findMany: {
            args: Prisma.RecoveryPasswordCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>[]
          }
          create: {
            args: Prisma.RecoveryPasswordCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>
          }
          createMany: {
            args: Prisma.RecoveryPasswordCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecoveryPasswordCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>[]
          }
          delete: {
            args: Prisma.RecoveryPasswordCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>
          }
          update: {
            args: Prisma.RecoveryPasswordCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>
          }
          deleteMany: {
            args: Prisma.RecoveryPasswordCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecoveryPasswordCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecoveryPasswordCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>[]
          }
          upsert: {
            args: Prisma.RecoveryPasswordCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordCodePayload>
          }
          aggregate: {
            args: Prisma.RecoveryPasswordCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecoveryPasswordCode>
          }
          groupBy: {
            args: Prisma.RecoveryPasswordCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecoveryPasswordCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecoveryPasswordCodeCountArgs<ExtArgs>
            result: $Utils.Optional<RecoveryPasswordCodeCountAggregateOutputType> | number
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
    recoveryPasswordCode?: RecoveryPasswordCodeOmit
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
    recoveryCodes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCodes?: boolean | UserCountOutputTypeCountRecoveryCodesArgs
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
  export type UserCountOutputTypeCountRecoveryCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryPasswordCodeWhereInput
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
    password: string | null
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
    password: string | null
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
    password: number
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
    password?: true
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
    password?: true
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
    password?: true
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
    password: string
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
    password?: boolean
    createdAt?: boolean
    isActivated?: boolean
    activatedEmailCode?: boolean
    recoveryCodes?: boolean | User$recoveryCodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surName?: boolean
    lastName?: boolean
    login?: boolean
    password?: boolean
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
    password?: boolean
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
    password?: boolean
    createdAt?: boolean
    isActivated?: boolean
    activatedEmailCode?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "surName" | "lastName" | "login" | "password" | "createdAt" | "isActivated" | "activatedEmailCode", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCodes?: boolean | User$recoveryCodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recoveryCodes: Prisma.$RecoveryPasswordCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      surName: string | null
      lastName: string | null
      login: string
      password: string
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
    recoveryCodes<T extends User$recoveryCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$recoveryCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
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
   * User.recoveryCodes
   */
  export type User$recoveryCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    where?: RecoveryPasswordCodeWhereInput
    orderBy?: RecoveryPasswordCodeOrderByWithRelationInput | RecoveryPasswordCodeOrderByWithRelationInput[]
    cursor?: RecoveryPasswordCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecoveryPasswordCodeScalarFieldEnum | RecoveryPasswordCodeScalarFieldEnum[]
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
   * Model RecoveryPasswordCode
   */

  export type AggregateRecoveryPasswordCode = {
    _count: RecoveryPasswordCodeCountAggregateOutputType | null
    _min: RecoveryPasswordCodeMinAggregateOutputType | null
    _max: RecoveryPasswordCodeMaxAggregateOutputType | null
  }

  export type RecoveryPasswordCodeMinAggregateOutputType = {
    id: string | null
    recoveryCode: string | null
    userId: string | null
    isUsed: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RecoveryPasswordCodeMaxAggregateOutputType = {
    id: string | null
    recoveryCode: string | null
    userId: string | null
    isUsed: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RecoveryPasswordCodeCountAggregateOutputType = {
    id: number
    recoveryCode: number
    userId: number
    isUsed: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type RecoveryPasswordCodeMinAggregateInputType = {
    id?: true
    recoveryCode?: true
    userId?: true
    isUsed?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RecoveryPasswordCodeMaxAggregateInputType = {
    id?: true
    recoveryCode?: true
    userId?: true
    isUsed?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RecoveryPasswordCodeCountAggregateInputType = {
    id?: true
    recoveryCode?: true
    userId?: true
    isUsed?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type RecoveryPasswordCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryPasswordCode to aggregate.
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswordCodes to fetch.
     */
    orderBy?: RecoveryPasswordCodeOrderByWithRelationInput | RecoveryPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecoveryPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswordCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecoveryPasswordCodes
    **/
    _count?: true | RecoveryPasswordCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecoveryPasswordCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecoveryPasswordCodeMaxAggregateInputType
  }

  export type GetRecoveryPasswordCodeAggregateType<T extends RecoveryPasswordCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecoveryPasswordCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecoveryPasswordCode[P]>
      : GetScalarType<T[P], AggregateRecoveryPasswordCode[P]>
  }




  export type RecoveryPasswordCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryPasswordCodeWhereInput
    orderBy?: RecoveryPasswordCodeOrderByWithAggregationInput | RecoveryPasswordCodeOrderByWithAggregationInput[]
    by: RecoveryPasswordCodeScalarFieldEnum[] | RecoveryPasswordCodeScalarFieldEnum
    having?: RecoveryPasswordCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecoveryPasswordCodeCountAggregateInputType | true
    _min?: RecoveryPasswordCodeMinAggregateInputType
    _max?: RecoveryPasswordCodeMaxAggregateInputType
  }

  export type RecoveryPasswordCodeGroupByOutputType = {
    id: string
    recoveryCode: string
    userId: string
    isUsed: boolean
    createdAt: Date
    expiresAt: Date
    _count: RecoveryPasswordCodeCountAggregateOutputType | null
    _min: RecoveryPasswordCodeMinAggregateOutputType | null
    _max: RecoveryPasswordCodeMaxAggregateOutputType | null
  }

  type GetRecoveryPasswordCodeGroupByPayload<T extends RecoveryPasswordCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecoveryPasswordCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecoveryPasswordCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecoveryPasswordCodeGroupByOutputType[P]>
            : GetScalarType<T[P], RecoveryPasswordCodeGroupByOutputType[P]>
        }
      >
    >


  export type RecoveryPasswordCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCode?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryPasswordCode"]>

  export type RecoveryPasswordCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCode?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryPasswordCode"]>

  export type RecoveryPasswordCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCode?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryPasswordCode"]>

  export type RecoveryPasswordCodeSelectScalar = {
    id?: boolean
    recoveryCode?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type RecoveryPasswordCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recoveryCode" | "userId" | "isUsed" | "createdAt" | "expiresAt", ExtArgs["result"]["recoveryPasswordCode"]>
  export type RecoveryPasswordCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecoveryPasswordCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecoveryPasswordCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecoveryPasswordCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecoveryPasswordCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recoveryCode: string
      userId: string
      isUsed: boolean
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["recoveryPasswordCode"]>
    composites: {}
  }

  type RecoveryPasswordCodeGetPayload<S extends boolean | null | undefined | RecoveryPasswordCodeDefaultArgs> = $Result.GetResult<Prisma.$RecoveryPasswordCodePayload, S>

  type RecoveryPasswordCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecoveryPasswordCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecoveryPasswordCodeCountAggregateInputType | true
    }

  export interface RecoveryPasswordCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecoveryPasswordCode'], meta: { name: 'RecoveryPasswordCode' } }
    /**
     * Find zero or one RecoveryPasswordCode that matches the filter.
     * @param {RecoveryPasswordCodeFindUniqueArgs} args - Arguments to find a RecoveryPasswordCode
     * @example
     * // Get one RecoveryPasswordCode
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecoveryPasswordCodeFindUniqueArgs>(args: SelectSubset<T, RecoveryPasswordCodeFindUniqueArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecoveryPasswordCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecoveryPasswordCodeFindUniqueOrThrowArgs} args - Arguments to find a RecoveryPasswordCode
     * @example
     * // Get one RecoveryPasswordCode
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecoveryPasswordCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecoveryPasswordCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryPasswordCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeFindFirstArgs} args - Arguments to find a RecoveryPasswordCode
     * @example
     * // Get one RecoveryPasswordCode
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecoveryPasswordCodeFindFirstArgs>(args?: SelectSubset<T, RecoveryPasswordCodeFindFirstArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryPasswordCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeFindFirstOrThrowArgs} args - Arguments to find a RecoveryPasswordCode
     * @example
     * // Get one RecoveryPasswordCode
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecoveryPasswordCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecoveryPasswordCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecoveryPasswordCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecoveryPasswordCodes
     * const recoveryPasswordCodes = await prisma.recoveryPasswordCode.findMany()
     * 
     * // Get first 10 RecoveryPasswordCodes
     * const recoveryPasswordCodes = await prisma.recoveryPasswordCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recoveryPasswordCodeWithIdOnly = await prisma.recoveryPasswordCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecoveryPasswordCodeFindManyArgs>(args?: SelectSubset<T, RecoveryPasswordCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecoveryPasswordCode.
     * @param {RecoveryPasswordCodeCreateArgs} args - Arguments to create a RecoveryPasswordCode.
     * @example
     * // Create one RecoveryPasswordCode
     * const RecoveryPasswordCode = await prisma.recoveryPasswordCode.create({
     *   data: {
     *     // ... data to create a RecoveryPasswordCode
     *   }
     * })
     * 
     */
    create<T extends RecoveryPasswordCodeCreateArgs>(args: SelectSubset<T, RecoveryPasswordCodeCreateArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecoveryPasswordCodes.
     * @param {RecoveryPasswordCodeCreateManyArgs} args - Arguments to create many RecoveryPasswordCodes.
     * @example
     * // Create many RecoveryPasswordCodes
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecoveryPasswordCodeCreateManyArgs>(args?: SelectSubset<T, RecoveryPasswordCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecoveryPasswordCodes and returns the data saved in the database.
     * @param {RecoveryPasswordCodeCreateManyAndReturnArgs} args - Arguments to create many RecoveryPasswordCodes.
     * @example
     * // Create many RecoveryPasswordCodes
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecoveryPasswordCodes and only return the `id`
     * const recoveryPasswordCodeWithIdOnly = await prisma.recoveryPasswordCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecoveryPasswordCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecoveryPasswordCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecoveryPasswordCode.
     * @param {RecoveryPasswordCodeDeleteArgs} args - Arguments to delete one RecoveryPasswordCode.
     * @example
     * // Delete one RecoveryPasswordCode
     * const RecoveryPasswordCode = await prisma.recoveryPasswordCode.delete({
     *   where: {
     *     // ... filter to delete one RecoveryPasswordCode
     *   }
     * })
     * 
     */
    delete<T extends RecoveryPasswordCodeDeleteArgs>(args: SelectSubset<T, RecoveryPasswordCodeDeleteArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecoveryPasswordCode.
     * @param {RecoveryPasswordCodeUpdateArgs} args - Arguments to update one RecoveryPasswordCode.
     * @example
     * // Update one RecoveryPasswordCode
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecoveryPasswordCodeUpdateArgs>(args: SelectSubset<T, RecoveryPasswordCodeUpdateArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecoveryPasswordCodes.
     * @param {RecoveryPasswordCodeDeleteManyArgs} args - Arguments to filter RecoveryPasswordCodes to delete.
     * @example
     * // Delete a few RecoveryPasswordCodes
     * const { count } = await prisma.recoveryPasswordCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecoveryPasswordCodeDeleteManyArgs>(args?: SelectSubset<T, RecoveryPasswordCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryPasswordCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecoveryPasswordCodes
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecoveryPasswordCodeUpdateManyArgs>(args: SelectSubset<T, RecoveryPasswordCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryPasswordCodes and returns the data updated in the database.
     * @param {RecoveryPasswordCodeUpdateManyAndReturnArgs} args - Arguments to update many RecoveryPasswordCodes.
     * @example
     * // Update many RecoveryPasswordCodes
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecoveryPasswordCodes and only return the `id`
     * const recoveryPasswordCodeWithIdOnly = await prisma.recoveryPasswordCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecoveryPasswordCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecoveryPasswordCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecoveryPasswordCode.
     * @param {RecoveryPasswordCodeUpsertArgs} args - Arguments to update or create a RecoveryPasswordCode.
     * @example
     * // Update or create a RecoveryPasswordCode
     * const recoveryPasswordCode = await prisma.recoveryPasswordCode.upsert({
     *   create: {
     *     // ... data to create a RecoveryPasswordCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecoveryPasswordCode we want to update
     *   }
     * })
     */
    upsert<T extends RecoveryPasswordCodeUpsertArgs>(args: SelectSubset<T, RecoveryPasswordCodeUpsertArgs<ExtArgs>>): Prisma__RecoveryPasswordCodeClient<$Result.GetResult<Prisma.$RecoveryPasswordCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecoveryPasswordCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeCountArgs} args - Arguments to filter RecoveryPasswordCodes to count.
     * @example
     * // Count the number of RecoveryPasswordCodes
     * const count = await prisma.recoveryPasswordCode.count({
     *   where: {
     *     // ... the filter for the RecoveryPasswordCodes we want to count
     *   }
     * })
    **/
    count<T extends RecoveryPasswordCodeCountArgs>(
      args?: Subset<T, RecoveryPasswordCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecoveryPasswordCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecoveryPasswordCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecoveryPasswordCodeAggregateArgs>(args: Subset<T, RecoveryPasswordCodeAggregateArgs>): Prisma.PrismaPromise<GetRecoveryPasswordCodeAggregateType<T>>

    /**
     * Group by RecoveryPasswordCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCodeGroupByArgs} args - Group by arguments.
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
      T extends RecoveryPasswordCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecoveryPasswordCodeGroupByArgs['orderBy'] }
        : { orderBy?: RecoveryPasswordCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecoveryPasswordCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecoveryPasswordCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecoveryPasswordCode model
   */
  readonly fields: RecoveryPasswordCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecoveryPasswordCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecoveryPasswordCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RecoveryPasswordCode model
   */
  interface RecoveryPasswordCodeFieldRefs {
    readonly id: FieldRef<"RecoveryPasswordCode", 'String'>
    readonly recoveryCode: FieldRef<"RecoveryPasswordCode", 'String'>
    readonly userId: FieldRef<"RecoveryPasswordCode", 'String'>
    readonly isUsed: FieldRef<"RecoveryPasswordCode", 'Boolean'>
    readonly createdAt: FieldRef<"RecoveryPasswordCode", 'DateTime'>
    readonly expiresAt: FieldRef<"RecoveryPasswordCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecoveryPasswordCode findUnique
   */
  export type RecoveryPasswordCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryPasswordCode to fetch.
     */
    where: RecoveryPasswordCodeWhereUniqueInput
  }

  /**
   * RecoveryPasswordCode findUniqueOrThrow
   */
  export type RecoveryPasswordCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryPasswordCode to fetch.
     */
    where: RecoveryPasswordCodeWhereUniqueInput
  }

  /**
   * RecoveryPasswordCode findFirst
   */
  export type RecoveryPasswordCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryPasswordCode to fetch.
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswordCodes to fetch.
     */
    orderBy?: RecoveryPasswordCodeOrderByWithRelationInput | RecoveryPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryPasswordCodes.
     */
    cursor?: RecoveryPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswordCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryPasswordCodes.
     */
    distinct?: RecoveryPasswordCodeScalarFieldEnum | RecoveryPasswordCodeScalarFieldEnum[]
  }

  /**
   * RecoveryPasswordCode findFirstOrThrow
   */
  export type RecoveryPasswordCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryPasswordCode to fetch.
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswordCodes to fetch.
     */
    orderBy?: RecoveryPasswordCodeOrderByWithRelationInput | RecoveryPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryPasswordCodes.
     */
    cursor?: RecoveryPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswordCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryPasswordCodes.
     */
    distinct?: RecoveryPasswordCodeScalarFieldEnum | RecoveryPasswordCodeScalarFieldEnum[]
  }

  /**
   * RecoveryPasswordCode findMany
   */
  export type RecoveryPasswordCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryPasswordCodes to fetch.
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswordCodes to fetch.
     */
    orderBy?: RecoveryPasswordCodeOrderByWithRelationInput | RecoveryPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecoveryPasswordCodes.
     */
    cursor?: RecoveryPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswordCodes.
     */
    skip?: number
    distinct?: RecoveryPasswordCodeScalarFieldEnum | RecoveryPasswordCodeScalarFieldEnum[]
  }

  /**
   * RecoveryPasswordCode create
   */
  export type RecoveryPasswordCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a RecoveryPasswordCode.
     */
    data: XOR<RecoveryPasswordCodeCreateInput, RecoveryPasswordCodeUncheckedCreateInput>
  }

  /**
   * RecoveryPasswordCode createMany
   */
  export type RecoveryPasswordCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecoveryPasswordCodes.
     */
    data: RecoveryPasswordCodeCreateManyInput | RecoveryPasswordCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecoveryPasswordCode createManyAndReturn
   */
  export type RecoveryPasswordCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * The data used to create many RecoveryPasswordCodes.
     */
    data: RecoveryPasswordCodeCreateManyInput | RecoveryPasswordCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryPasswordCode update
   */
  export type RecoveryPasswordCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a RecoveryPasswordCode.
     */
    data: XOR<RecoveryPasswordCodeUpdateInput, RecoveryPasswordCodeUncheckedUpdateInput>
    /**
     * Choose, which RecoveryPasswordCode to update.
     */
    where: RecoveryPasswordCodeWhereUniqueInput
  }

  /**
   * RecoveryPasswordCode updateMany
   */
  export type RecoveryPasswordCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecoveryPasswordCodes.
     */
    data: XOR<RecoveryPasswordCodeUpdateManyMutationInput, RecoveryPasswordCodeUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryPasswordCodes to update
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * Limit how many RecoveryPasswordCodes to update.
     */
    limit?: number
  }

  /**
   * RecoveryPasswordCode updateManyAndReturn
   */
  export type RecoveryPasswordCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * The data used to update RecoveryPasswordCodes.
     */
    data: XOR<RecoveryPasswordCodeUpdateManyMutationInput, RecoveryPasswordCodeUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryPasswordCodes to update
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * Limit how many RecoveryPasswordCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryPasswordCode upsert
   */
  export type RecoveryPasswordCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the RecoveryPasswordCode to update in case it exists.
     */
    where: RecoveryPasswordCodeWhereUniqueInput
    /**
     * In case the RecoveryPasswordCode found by the `where` argument doesn't exist, create a new RecoveryPasswordCode with this data.
     */
    create: XOR<RecoveryPasswordCodeCreateInput, RecoveryPasswordCodeUncheckedCreateInput>
    /**
     * In case the RecoveryPasswordCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecoveryPasswordCodeUpdateInput, RecoveryPasswordCodeUncheckedUpdateInput>
  }

  /**
   * RecoveryPasswordCode delete
   */
  export type RecoveryPasswordCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter which RecoveryPasswordCode to delete.
     */
    where: RecoveryPasswordCodeWhereUniqueInput
  }

  /**
   * RecoveryPasswordCode deleteMany
   */
  export type RecoveryPasswordCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryPasswordCodes to delete
     */
    where?: RecoveryPasswordCodeWhereInput
    /**
     * Limit how many RecoveryPasswordCodes to delete.
     */
    limit?: number
  }

  /**
   * RecoveryPasswordCode without action
   */
  export type RecoveryPasswordCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPasswordCode
     */
    select?: RecoveryPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPasswordCode
     */
    omit?: RecoveryPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryPasswordCodeInclude<ExtArgs> | null
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
    password: 'password',
    createdAt: 'createdAt',
    isActivated: 'isActivated',
    activatedEmailCode: 'activatedEmailCode'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecoveryPasswordCodeScalarFieldEnum: {
    id: 'id',
    recoveryCode: 'recoveryCode',
    userId: 'userId',
    isUsed: 'isUsed',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type RecoveryPasswordCodeScalarFieldEnum = (typeof RecoveryPasswordCodeScalarFieldEnum)[keyof typeof RecoveryPasswordCodeScalarFieldEnum]


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
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActivated?: BoolFilter<"User"> | boolean
    activatedEmailCode?: StringFilter<"User"> | string
    recoveryCodes?: RecoveryPasswordCodeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    login?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isActivated?: SortOrder
    activatedEmailCode?: SortOrder
    recoveryCodes?: RecoveryPasswordCodeOrderByRelationAggregateInput
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
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActivated?: BoolFilter<"User"> | boolean
    activatedEmailCode?: StringFilter<"User"> | string
    recoveryCodes?: RecoveryPasswordCodeListRelationFilter
  }, "id" | "email" | "login">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    login?: SortOrder
    password?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActivated?: BoolWithAggregatesFilter<"User"> | boolean
    activatedEmailCode?: StringWithAggregatesFilter<"User"> | string
  }

  export type RecoveryPasswordCodeWhereInput = {
    AND?: RecoveryPasswordCodeWhereInput | RecoveryPasswordCodeWhereInput[]
    OR?: RecoveryPasswordCodeWhereInput[]
    NOT?: RecoveryPasswordCodeWhereInput | RecoveryPasswordCodeWhereInput[]
    id?: StringFilter<"RecoveryPasswordCode"> | string
    recoveryCode?: StringFilter<"RecoveryPasswordCode"> | string
    userId?: StringFilter<"RecoveryPasswordCode"> | string
    isUsed?: BoolFilter<"RecoveryPasswordCode"> | boolean
    createdAt?: DateTimeFilter<"RecoveryPasswordCode"> | Date | string
    expiresAt?: DateTimeFilter<"RecoveryPasswordCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecoveryPasswordCodeOrderByWithRelationInput = {
    id?: SortOrder
    recoveryCode?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecoveryPasswordCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecoveryPasswordCodeWhereInput | RecoveryPasswordCodeWhereInput[]
    OR?: RecoveryPasswordCodeWhereInput[]
    NOT?: RecoveryPasswordCodeWhereInput | RecoveryPasswordCodeWhereInput[]
    recoveryCode?: StringFilter<"RecoveryPasswordCode"> | string
    userId?: StringFilter<"RecoveryPasswordCode"> | string
    isUsed?: BoolFilter<"RecoveryPasswordCode"> | boolean
    createdAt?: DateTimeFilter<"RecoveryPasswordCode"> | Date | string
    expiresAt?: DateTimeFilter<"RecoveryPasswordCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecoveryPasswordCodeOrderByWithAggregationInput = {
    id?: SortOrder
    recoveryCode?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: RecoveryPasswordCodeCountOrderByAggregateInput
    _max?: RecoveryPasswordCodeMaxOrderByAggregateInput
    _min?: RecoveryPasswordCodeMinOrderByAggregateInput
  }

  export type RecoveryPasswordCodeScalarWhereWithAggregatesInput = {
    AND?: RecoveryPasswordCodeScalarWhereWithAggregatesInput | RecoveryPasswordCodeScalarWhereWithAggregatesInput[]
    OR?: RecoveryPasswordCodeScalarWhereWithAggregatesInput[]
    NOT?: RecoveryPasswordCodeScalarWhereWithAggregatesInput | RecoveryPasswordCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecoveryPasswordCode"> | string
    recoveryCode?: StringWithAggregatesFilter<"RecoveryPasswordCode"> | string
    userId?: StringWithAggregatesFilter<"RecoveryPasswordCode"> | string
    isUsed?: BoolWithAggregatesFilter<"RecoveryPasswordCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RecoveryPasswordCode"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RecoveryPasswordCode"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    password: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    recoveryCodes?: RecoveryPasswordCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    password: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
    recoveryCodes?: RecoveryPasswordCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: RecoveryPasswordCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: RecoveryPasswordCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    password: string
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
    password?: StringFieldUpdateOperationsInput | string
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
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
  }

  export type RecoveryPasswordCodeCreateInput = {
    id?: string
    recoveryCode: string
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutRecoveryCodesInput
  }

  export type RecoveryPasswordCodeUncheckedCreateInput = {
    id?: string
    recoveryCode: string
    userId: string
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RecoveryPasswordCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecoveryCodesNestedInput
  }

  export type RecoveryPasswordCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryPasswordCodeCreateManyInput = {
    id?: string
    recoveryCode: string
    userId: string
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RecoveryPasswordCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryPasswordCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type RecoveryPasswordCodeListRelationFilter = {
    every?: RecoveryPasswordCodeWhereInput
    some?: RecoveryPasswordCodeWhereInput
    none?: RecoveryPasswordCodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecoveryPasswordCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    lastName?: SortOrder
    login?: SortOrder
    password?: SortOrder
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
    password?: SortOrder
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
    password?: SortOrder
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

  export type RecoveryPasswordCodeCountOrderByAggregateInput = {
    id?: SortOrder
    recoveryCode?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RecoveryPasswordCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    recoveryCode?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RecoveryPasswordCodeMinOrderByAggregateInput = {
    id?: SortOrder
    recoveryCode?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RecoveryPasswordCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<RecoveryPasswordCodeCreateWithoutUserInput, RecoveryPasswordCodeUncheckedCreateWithoutUserInput> | RecoveryPasswordCodeCreateWithoutUserInput[] | RecoveryPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryPasswordCodeCreateOrConnectWithoutUserInput | RecoveryPasswordCodeCreateOrConnectWithoutUserInput[]
    createMany?: RecoveryPasswordCodeCreateManyUserInputEnvelope
    connect?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
  }

  export type RecoveryPasswordCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecoveryPasswordCodeCreateWithoutUserInput, RecoveryPasswordCodeUncheckedCreateWithoutUserInput> | RecoveryPasswordCodeCreateWithoutUserInput[] | RecoveryPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryPasswordCodeCreateOrConnectWithoutUserInput | RecoveryPasswordCodeCreateOrConnectWithoutUserInput[]
    createMany?: RecoveryPasswordCodeCreateManyUserInputEnvelope
    connect?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
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

  export type RecoveryPasswordCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecoveryPasswordCodeCreateWithoutUserInput, RecoveryPasswordCodeUncheckedCreateWithoutUserInput> | RecoveryPasswordCodeCreateWithoutUserInput[] | RecoveryPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryPasswordCodeCreateOrConnectWithoutUserInput | RecoveryPasswordCodeCreateOrConnectWithoutUserInput[]
    upsert?: RecoveryPasswordCodeUpsertWithWhereUniqueWithoutUserInput | RecoveryPasswordCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecoveryPasswordCodeCreateManyUserInputEnvelope
    set?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    disconnect?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    delete?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    connect?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    update?: RecoveryPasswordCodeUpdateWithWhereUniqueWithoutUserInput | RecoveryPasswordCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecoveryPasswordCodeUpdateManyWithWhereWithoutUserInput | RecoveryPasswordCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecoveryPasswordCodeScalarWhereInput | RecoveryPasswordCodeScalarWhereInput[]
  }

  export type RecoveryPasswordCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecoveryPasswordCodeCreateWithoutUserInput, RecoveryPasswordCodeUncheckedCreateWithoutUserInput> | RecoveryPasswordCodeCreateWithoutUserInput[] | RecoveryPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryPasswordCodeCreateOrConnectWithoutUserInput | RecoveryPasswordCodeCreateOrConnectWithoutUserInput[]
    upsert?: RecoveryPasswordCodeUpsertWithWhereUniqueWithoutUserInput | RecoveryPasswordCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecoveryPasswordCodeCreateManyUserInputEnvelope
    set?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    disconnect?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    delete?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    connect?: RecoveryPasswordCodeWhereUniqueInput | RecoveryPasswordCodeWhereUniqueInput[]
    update?: RecoveryPasswordCodeUpdateWithWhereUniqueWithoutUserInput | RecoveryPasswordCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecoveryPasswordCodeUpdateManyWithWhereWithoutUserInput | RecoveryPasswordCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecoveryPasswordCodeScalarWhereInput | RecoveryPasswordCodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecoveryCodesInput = {
    create?: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecoveryCodesNestedInput = {
    create?: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryCodesInput
    upsert?: UserUpsertWithoutRecoveryCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecoveryCodesInput, UserUpdateWithoutRecoveryCodesInput>, UserUncheckedUpdateWithoutRecoveryCodesInput>
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

  export type RecoveryPasswordCodeCreateWithoutUserInput = {
    id?: string
    recoveryCode: string
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RecoveryPasswordCodeUncheckedCreateWithoutUserInput = {
    id?: string
    recoveryCode: string
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RecoveryPasswordCodeCreateOrConnectWithoutUserInput = {
    where: RecoveryPasswordCodeWhereUniqueInput
    create: XOR<RecoveryPasswordCodeCreateWithoutUserInput, RecoveryPasswordCodeUncheckedCreateWithoutUserInput>
  }

  export type RecoveryPasswordCodeCreateManyUserInputEnvelope = {
    data: RecoveryPasswordCodeCreateManyUserInput | RecoveryPasswordCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecoveryPasswordCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: RecoveryPasswordCodeWhereUniqueInput
    update: XOR<RecoveryPasswordCodeUpdateWithoutUserInput, RecoveryPasswordCodeUncheckedUpdateWithoutUserInput>
    create: XOR<RecoveryPasswordCodeCreateWithoutUserInput, RecoveryPasswordCodeUncheckedCreateWithoutUserInput>
  }

  export type RecoveryPasswordCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: RecoveryPasswordCodeWhereUniqueInput
    data: XOR<RecoveryPasswordCodeUpdateWithoutUserInput, RecoveryPasswordCodeUncheckedUpdateWithoutUserInput>
  }

  export type RecoveryPasswordCodeUpdateManyWithWhereWithoutUserInput = {
    where: RecoveryPasswordCodeScalarWhereInput
    data: XOR<RecoveryPasswordCodeUpdateManyMutationInput, RecoveryPasswordCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type RecoveryPasswordCodeScalarWhereInput = {
    AND?: RecoveryPasswordCodeScalarWhereInput | RecoveryPasswordCodeScalarWhereInput[]
    OR?: RecoveryPasswordCodeScalarWhereInput[]
    NOT?: RecoveryPasswordCodeScalarWhereInput | RecoveryPasswordCodeScalarWhereInput[]
    id?: StringFilter<"RecoveryPasswordCode"> | string
    recoveryCode?: StringFilter<"RecoveryPasswordCode"> | string
    userId?: StringFilter<"RecoveryPasswordCode"> | string
    isUsed?: BoolFilter<"RecoveryPasswordCode"> | boolean
    createdAt?: DateTimeFilter<"RecoveryPasswordCode"> | Date | string
    expiresAt?: DateTimeFilter<"RecoveryPasswordCode"> | Date | string
  }

  export type UserCreateWithoutRecoveryCodesInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    password: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
  }

  export type UserUncheckedCreateWithoutRecoveryCodesInput = {
    id?: string
    email: string
    name?: string | null
    surName?: string | null
    lastName?: string | null
    login: string
    password: string
    createdAt?: Date | string
    isActivated?: boolean
    activatedEmailCode?: string
  }

  export type UserCreateOrConnectWithoutRecoveryCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
  }

  export type UserUpsertWithoutRecoveryCodesInput = {
    update: XOR<UserUpdateWithoutRecoveryCodesInput, UserUncheckedUpdateWithoutRecoveryCodesInput>
    create: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecoveryCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecoveryCodesInput, UserUncheckedUpdateWithoutRecoveryCodesInput>
  }

  export type UserUpdateWithoutRecoveryCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutRecoveryCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivated?: BoolFieldUpdateOperationsInput | boolean
    activatedEmailCode?: StringFieldUpdateOperationsInput | string
  }

  export type RecoveryPasswordCodeCreateManyUserInput = {
    id?: string
    recoveryCode: string
    isUsed?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RecoveryPasswordCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryPasswordCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryPasswordCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
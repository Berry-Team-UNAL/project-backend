
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
 * Model articulo_proveedor
 * 
 */
export type articulo_proveedor = $Result.DefaultSelection<Prisma.$articulo_proveedorPayload>
/**
 * Model catalogo_componente
 * 
 */
export type catalogo_componente = $Result.DefaultSelection<Prisma.$catalogo_componentePayload>
/**
 * Model detalle_formulacion
 * 
 */
export type detalle_formulacion = $Result.DefaultSelection<Prisma.$detalle_formulacionPayload>
/**
 * Model ingrediente_base
 * 
 */
export type ingrediente_base = $Result.DefaultSelection<Prisma.$ingrediente_basePayload>
/**
 * Model proveedor
 * 
 */
export type proveedor = $Result.DefaultSelection<Prisma.$proveedorPayload>
/**
 * Model receta_subreceta
 * 
 */
export type receta_subreceta = $Result.DefaultSelection<Prisma.$receta_subrecetaPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model servicio_costo
 * 
 */
export type servicio_costo = $Result.DefaultSelection<Prisma.$servicio_costoPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articulo_proveedors
 * const articulo_proveedors = await prisma.articulo_proveedor.findMany()
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
   * // Fetch zero or more Articulo_proveedors
   * const articulo_proveedors = await prisma.articulo_proveedor.findMany()
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
   * `prisma.articulo_proveedor`: Exposes CRUD operations for the **articulo_proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articulo_proveedors
    * const articulo_proveedors = await prisma.articulo_proveedor.findMany()
    * ```
    */
  get articulo_proveedor(): Prisma.articulo_proveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalogo_componente`: Exposes CRUD operations for the **catalogo_componente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogo_componentes
    * const catalogo_componentes = await prisma.catalogo_componente.findMany()
    * ```
    */
  get catalogo_componente(): Prisma.catalogo_componenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_formulacion`: Exposes CRUD operations for the **detalle_formulacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_formulacions
    * const detalle_formulacions = await prisma.detalle_formulacion.findMany()
    * ```
    */
  get detalle_formulacion(): Prisma.detalle_formulacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingrediente_base`: Exposes CRUD operations for the **ingrediente_base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingrediente_bases
    * const ingrediente_bases = await prisma.ingrediente_base.findMany()
    * ```
    */
  get ingrediente_base(): Prisma.ingrediente_baseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedor`: Exposes CRUD operations for the **proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.proveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receta_subreceta`: Exposes CRUD operations for the **receta_subreceta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receta_subrecetas
    * const receta_subrecetas = await prisma.receta_subreceta.findMany()
    * ```
    */
  get receta_subreceta(): Prisma.receta_subrecetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio_costo`: Exposes CRUD operations for the **servicio_costo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicio_costos
    * const servicio_costos = await prisma.servicio_costo.findMany()
    * ```
    */
  get servicio_costo(): Prisma.servicio_costoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    articulo_proveedor: 'articulo_proveedor',
    catalogo_componente: 'catalogo_componente',
    detalle_formulacion: 'detalle_formulacion',
    ingrediente_base: 'ingrediente_base',
    proveedor: 'proveedor',
    receta_subreceta: 'receta_subreceta',
    rol: 'rol',
    servicio_costo: 'servicio_costo',
    usuario: 'usuario'
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
      modelProps: "articulo_proveedor" | "catalogo_componente" | "detalle_formulacion" | "ingrediente_base" | "proveedor" | "receta_subreceta" | "rol" | "servicio_costo" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      articulo_proveedor: {
        payload: Prisma.$articulo_proveedorPayload<ExtArgs>
        fields: Prisma.articulo_proveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articulo_proveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articulo_proveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>
          }
          findFirst: {
            args: Prisma.articulo_proveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articulo_proveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>
          }
          findMany: {
            args: Prisma.articulo_proveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>[]
          }
          create: {
            args: Prisma.articulo_proveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>
          }
          createMany: {
            args: Prisma.articulo_proveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.articulo_proveedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>[]
          }
          delete: {
            args: Prisma.articulo_proveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>
          }
          update: {
            args: Prisma.articulo_proveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>
          }
          deleteMany: {
            args: Prisma.articulo_proveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articulo_proveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.articulo_proveedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>[]
          }
          upsert: {
            args: Prisma.articulo_proveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_proveedorPayload>
          }
          aggregate: {
            args: Prisma.Articulo_proveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticulo_proveedor>
          }
          groupBy: {
            args: Prisma.articulo_proveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Articulo_proveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.articulo_proveedorCountArgs<ExtArgs>
            result: $Utils.Optional<Articulo_proveedorCountAggregateOutputType> | number
          }
        }
      }
      catalogo_componente: {
        payload: Prisma.$catalogo_componentePayload<ExtArgs>
        fields: Prisma.catalogo_componenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.catalogo_componenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.catalogo_componenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>
          }
          findFirst: {
            args: Prisma.catalogo_componenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.catalogo_componenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>
          }
          findMany: {
            args: Prisma.catalogo_componenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>[]
          }
          create: {
            args: Prisma.catalogo_componenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>
          }
          createMany: {
            args: Prisma.catalogo_componenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.catalogo_componenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>[]
          }
          delete: {
            args: Prisma.catalogo_componenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>
          }
          update: {
            args: Prisma.catalogo_componenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>
          }
          deleteMany: {
            args: Prisma.catalogo_componenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.catalogo_componenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.catalogo_componenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>[]
          }
          upsert: {
            args: Prisma.catalogo_componenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$catalogo_componentePayload>
          }
          aggregate: {
            args: Prisma.Catalogo_componenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalogo_componente>
          }
          groupBy: {
            args: Prisma.catalogo_componenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Catalogo_componenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.catalogo_componenteCountArgs<ExtArgs>
            result: $Utils.Optional<Catalogo_componenteCountAggregateOutputType> | number
          }
        }
      }
      detalle_formulacion: {
        payload: Prisma.$detalle_formulacionPayload<ExtArgs>
        fields: Prisma.detalle_formulacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_formulacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_formulacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>
          }
          findFirst: {
            args: Prisma.detalle_formulacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_formulacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>
          }
          findMany: {
            args: Prisma.detalle_formulacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>[]
          }
          create: {
            args: Prisma.detalle_formulacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>
          }
          createMany: {
            args: Prisma.detalle_formulacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalle_formulacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>[]
          }
          delete: {
            args: Prisma.detalle_formulacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>
          }
          update: {
            args: Prisma.detalle_formulacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>
          }
          deleteMany: {
            args: Prisma.detalle_formulacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_formulacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detalle_formulacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>[]
          }
          upsert: {
            args: Prisma.detalle_formulacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_formulacionPayload>
          }
          aggregate: {
            args: Prisma.Detalle_formulacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_formulacion>
          }
          groupBy: {
            args: Prisma.detalle_formulacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_formulacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_formulacionCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_formulacionCountAggregateOutputType> | number
          }
        }
      }
      ingrediente_base: {
        payload: Prisma.$ingrediente_basePayload<ExtArgs>
        fields: Prisma.ingrediente_baseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingrediente_baseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingrediente_baseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>
          }
          findFirst: {
            args: Prisma.ingrediente_baseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingrediente_baseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>
          }
          findMany: {
            args: Prisma.ingrediente_baseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>[]
          }
          create: {
            args: Prisma.ingrediente_baseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>
          }
          createMany: {
            args: Prisma.ingrediente_baseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingrediente_baseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>[]
          }
          delete: {
            args: Prisma.ingrediente_baseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>
          }
          update: {
            args: Prisma.ingrediente_baseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>
          }
          deleteMany: {
            args: Prisma.ingrediente_baseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingrediente_baseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingrediente_baseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>[]
          }
          upsert: {
            args: Prisma.ingrediente_baseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_basePayload>
          }
          aggregate: {
            args: Prisma.Ingrediente_baseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngrediente_base>
          }
          groupBy: {
            args: Prisma.ingrediente_baseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ingrediente_baseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingrediente_baseCountArgs<ExtArgs>
            result: $Utils.Optional<Ingrediente_baseCountAggregateOutputType> | number
          }
        }
      }
      proveedor: {
        payload: Prisma.$proveedorPayload<ExtArgs>
        fields: Prisma.proveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>
          }
          findFirst: {
            args: Prisma.proveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>
          }
          findMany: {
            args: Prisma.proveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>[]
          }
          create: {
            args: Prisma.proveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>
          }
          createMany: {
            args: Prisma.proveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proveedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>[]
          }
          delete: {
            args: Prisma.proveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>
          }
          update: {
            args: Prisma.proveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>
          }
          deleteMany: {
            args: Prisma.proveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proveedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>[]
          }
          upsert: {
            args: Prisma.proveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.proveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.proveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      receta_subreceta: {
        payload: Prisma.$receta_subrecetaPayload<ExtArgs>
        fields: Prisma.receta_subrecetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receta_subrecetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receta_subrecetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>
          }
          findFirst: {
            args: Prisma.receta_subrecetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receta_subrecetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>
          }
          findMany: {
            args: Prisma.receta_subrecetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>[]
          }
          create: {
            args: Prisma.receta_subrecetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>
          }
          createMany: {
            args: Prisma.receta_subrecetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.receta_subrecetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>[]
          }
          delete: {
            args: Prisma.receta_subrecetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>
          }
          update: {
            args: Prisma.receta_subrecetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>
          }
          deleteMany: {
            args: Prisma.receta_subrecetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receta_subrecetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.receta_subrecetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>[]
          }
          upsert: {
            args: Prisma.receta_subrecetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receta_subrecetaPayload>
          }
          aggregate: {
            args: Prisma.Receta_subrecetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceta_subreceta>
          }
          groupBy: {
            args: Prisma.receta_subrecetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Receta_subrecetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.receta_subrecetaCountArgs<ExtArgs>
            result: $Utils.Optional<Receta_subrecetaCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      servicio_costo: {
        payload: Prisma.$servicio_costoPayload<ExtArgs>
        fields: Prisma.servicio_costoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicio_costoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicio_costoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>
          }
          findFirst: {
            args: Prisma.servicio_costoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicio_costoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>
          }
          findMany: {
            args: Prisma.servicio_costoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>[]
          }
          create: {
            args: Prisma.servicio_costoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>
          }
          createMany: {
            args: Prisma.servicio_costoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicio_costoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>[]
          }
          delete: {
            args: Prisma.servicio_costoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>
          }
          update: {
            args: Prisma.servicio_costoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>
          }
          deleteMany: {
            args: Prisma.servicio_costoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicio_costoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicio_costoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>[]
          }
          upsert: {
            args: Prisma.servicio_costoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_costoPayload>
          }
          aggregate: {
            args: Prisma.Servicio_costoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio_costo>
          }
          groupBy: {
            args: Prisma.servicio_costoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Servicio_costoGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicio_costoCountArgs<ExtArgs>
            result: $Utils.Optional<Servicio_costoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    articulo_proveedor?: articulo_proveedorOmit
    catalogo_componente?: catalogo_componenteOmit
    detalle_formulacion?: detalle_formulacionOmit
    ingrediente_base?: ingrediente_baseOmit
    proveedor?: proveedorOmit
    receta_subreceta?: receta_subrecetaOmit
    rol?: rolOmit
    servicio_costo?: servicio_costoOmit
    usuario?: usuarioOmit
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
   * Count Type Articulo_proveedorCountOutputType
   */

  export type Articulo_proveedorCountOutputType = {
    detalle_formulacion: number
  }

  export type Articulo_proveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_formulacion?: boolean | Articulo_proveedorCountOutputTypeCountDetalle_formulacionArgs
  }

  // Custom InputTypes
  /**
   * Articulo_proveedorCountOutputType without action
   */
  export type Articulo_proveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articulo_proveedorCountOutputType
     */
    select?: Articulo_proveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Articulo_proveedorCountOutputType without action
   */
  export type Articulo_proveedorCountOutputTypeCountDetalle_formulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_formulacionWhereInput
  }


  /**
   * Count Type Catalogo_componenteCountOutputType
   */

  export type Catalogo_componenteCountOutputType = {
    detalle_formulacion: number
  }

  export type Catalogo_componenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_formulacion?: boolean | Catalogo_componenteCountOutputTypeCountDetalle_formulacionArgs
  }

  // Custom InputTypes
  /**
   * Catalogo_componenteCountOutputType without action
   */
  export type Catalogo_componenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo_componenteCountOutputType
     */
    select?: Catalogo_componenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Catalogo_componenteCountOutputType without action
   */
  export type Catalogo_componenteCountOutputTypeCountDetalle_formulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_formulacionWhereInput
  }


  /**
   * Count Type Ingrediente_baseCountOutputType
   */

  export type Ingrediente_baseCountOutputType = {
    articulo_proveedor: number
  }

  export type Ingrediente_baseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | Ingrediente_baseCountOutputTypeCountArticulo_proveedorArgs
  }

  // Custom InputTypes
  /**
   * Ingrediente_baseCountOutputType without action
   */
  export type Ingrediente_baseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente_baseCountOutputType
     */
    select?: Ingrediente_baseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ingrediente_baseCountOutputType without action
   */
  export type Ingrediente_baseCountOutputTypeCountArticulo_proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articulo_proveedorWhereInput
  }


  /**
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    articulo_proveedor: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | ProveedorCountOutputTypeCountArticulo_proveedorArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountArticulo_proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articulo_proveedorWhereInput
  }


  /**
   * Count Type Receta_subrecetaCountOutputType
   */

  export type Receta_subrecetaCountOutputType = {
    detalle_formulacion: number
  }

  export type Receta_subrecetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_formulacion?: boolean | Receta_subrecetaCountOutputTypeCountDetalle_formulacionArgs
  }

  // Custom InputTypes
  /**
   * Receta_subrecetaCountOutputType without action
   */
  export type Receta_subrecetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta_subrecetaCountOutputType
     */
    select?: Receta_subrecetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Receta_subrecetaCountOutputType without action
   */
  export type Receta_subrecetaCountOutputTypeCountDetalle_formulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_formulacionWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuario: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | RolCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    receta_subreceta: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta_subreceta?: boolean | UsuarioCountOutputTypeCountReceta_subrecetaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReceta_subrecetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receta_subrecetaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model articulo_proveedor
   */

  export type AggregateArticulo_proveedor = {
    _count: Articulo_proveedorCountAggregateOutputType | null
    _avg: Articulo_proveedorAvgAggregateOutputType | null
    _sum: Articulo_proveedorSumAggregateOutputType | null
    _min: Articulo_proveedorMinAggregateOutputType | null
    _max: Articulo_proveedorMaxAggregateOutputType | null
  }

  export type Articulo_proveedorAvgAggregateOutputType = {
    id_articulo: number | null
    id_componente: number | null
    id_proveedor: number | null
    costo_por_unidad: Decimal | null
    porcentaje_agua: Decimal | null
    porcentaje_grasa: Decimal | null
    porcentaje_merma_limpieza: Decimal | null
  }

  export type Articulo_proveedorSumAggregateOutputType = {
    id_articulo: number | null
    id_componente: number | null
    id_proveedor: number | null
    costo_por_unidad: Decimal | null
    porcentaje_agua: Decimal | null
    porcentaje_grasa: Decimal | null
    porcentaje_merma_limpieza: Decimal | null
  }

  export type Articulo_proveedorMinAggregateOutputType = {
    id_articulo: number | null
    id_componente: number | null
    id_proveedor: number | null
    marca_descripcion: string | null
    costo_por_unidad: Decimal | null
    porcentaje_agua: Decimal | null
    porcentaje_grasa: Decimal | null
    porcentaje_merma_limpieza: Decimal | null
    es_predeterminado: boolean | null
    creado_en: Date | null
  }

  export type Articulo_proveedorMaxAggregateOutputType = {
    id_articulo: number | null
    id_componente: number | null
    id_proveedor: number | null
    marca_descripcion: string | null
    costo_por_unidad: Decimal | null
    porcentaje_agua: Decimal | null
    porcentaje_grasa: Decimal | null
    porcentaje_merma_limpieza: Decimal | null
    es_predeterminado: boolean | null
    creado_en: Date | null
  }

  export type Articulo_proveedorCountAggregateOutputType = {
    id_articulo: number
    id_componente: number
    id_proveedor: number
    marca_descripcion: number
    costo_por_unidad: number
    porcentaje_agua: number
    porcentaje_grasa: number
    porcentaje_merma_limpieza: number
    es_predeterminado: number
    creado_en: number
    _all: number
  }


  export type Articulo_proveedorAvgAggregateInputType = {
    id_articulo?: true
    id_componente?: true
    id_proveedor?: true
    costo_por_unidad?: true
    porcentaje_agua?: true
    porcentaje_grasa?: true
    porcentaje_merma_limpieza?: true
  }

  export type Articulo_proveedorSumAggregateInputType = {
    id_articulo?: true
    id_componente?: true
    id_proveedor?: true
    costo_por_unidad?: true
    porcentaje_agua?: true
    porcentaje_grasa?: true
    porcentaje_merma_limpieza?: true
  }

  export type Articulo_proveedorMinAggregateInputType = {
    id_articulo?: true
    id_componente?: true
    id_proveedor?: true
    marca_descripcion?: true
    costo_por_unidad?: true
    porcentaje_agua?: true
    porcentaje_grasa?: true
    porcentaje_merma_limpieza?: true
    es_predeterminado?: true
    creado_en?: true
  }

  export type Articulo_proveedorMaxAggregateInputType = {
    id_articulo?: true
    id_componente?: true
    id_proveedor?: true
    marca_descripcion?: true
    costo_por_unidad?: true
    porcentaje_agua?: true
    porcentaje_grasa?: true
    porcentaje_merma_limpieza?: true
    es_predeterminado?: true
    creado_en?: true
  }

  export type Articulo_proveedorCountAggregateInputType = {
    id_articulo?: true
    id_componente?: true
    id_proveedor?: true
    marca_descripcion?: true
    costo_por_unidad?: true
    porcentaje_agua?: true
    porcentaje_grasa?: true
    porcentaje_merma_limpieza?: true
    es_predeterminado?: true
    creado_en?: true
    _all?: true
  }

  export type Articulo_proveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articulo_proveedor to aggregate.
     */
    where?: articulo_proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_proveedors to fetch.
     */
    orderBy?: articulo_proveedorOrderByWithRelationInput | articulo_proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articulo_proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articulo_proveedors
    **/
    _count?: true | Articulo_proveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Articulo_proveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Articulo_proveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Articulo_proveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Articulo_proveedorMaxAggregateInputType
  }

  export type GetArticulo_proveedorAggregateType<T extends Articulo_proveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateArticulo_proveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticulo_proveedor[P]>
      : GetScalarType<T[P], AggregateArticulo_proveedor[P]>
  }




  export type articulo_proveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articulo_proveedorWhereInput
    orderBy?: articulo_proveedorOrderByWithAggregationInput | articulo_proveedorOrderByWithAggregationInput[]
    by: Articulo_proveedorScalarFieldEnum[] | Articulo_proveedorScalarFieldEnum
    having?: articulo_proveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Articulo_proveedorCountAggregateInputType | true
    _avg?: Articulo_proveedorAvgAggregateInputType
    _sum?: Articulo_proveedorSumAggregateInputType
    _min?: Articulo_proveedorMinAggregateInputType
    _max?: Articulo_proveedorMaxAggregateInputType
  }

  export type Articulo_proveedorGroupByOutputType = {
    id_articulo: number
    id_componente: number
    id_proveedor: number
    marca_descripcion: string | null
    costo_por_unidad: Decimal
    porcentaje_agua: Decimal | null
    porcentaje_grasa: Decimal | null
    porcentaje_merma_limpieza: Decimal | null
    es_predeterminado: boolean | null
    creado_en: Date | null
    _count: Articulo_proveedorCountAggregateOutputType | null
    _avg: Articulo_proveedorAvgAggregateOutputType | null
    _sum: Articulo_proveedorSumAggregateOutputType | null
    _min: Articulo_proveedorMinAggregateOutputType | null
    _max: Articulo_proveedorMaxAggregateOutputType | null
  }

  type GetArticulo_proveedorGroupByPayload<T extends articulo_proveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Articulo_proveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Articulo_proveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Articulo_proveedorGroupByOutputType[P]>
            : GetScalarType<T[P], Articulo_proveedorGroupByOutputType[P]>
        }
      >
    >


  export type articulo_proveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_articulo?: boolean
    id_componente?: boolean
    id_proveedor?: boolean
    marca_descripcion?: boolean
    costo_por_unidad?: boolean
    porcentaje_agua?: boolean
    porcentaje_grasa?: boolean
    porcentaje_merma_limpieza?: boolean
    es_predeterminado?: boolean
    creado_en?: boolean
    ingrediente_base?: boolean | ingrediente_baseDefaultArgs<ExtArgs>
    proveedor?: boolean | proveedorDefaultArgs<ExtArgs>
    detalle_formulacion?: boolean | articulo_proveedor$detalle_formulacionArgs<ExtArgs>
    _count?: boolean | Articulo_proveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo_proveedor"]>

  export type articulo_proveedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_articulo?: boolean
    id_componente?: boolean
    id_proveedor?: boolean
    marca_descripcion?: boolean
    costo_por_unidad?: boolean
    porcentaje_agua?: boolean
    porcentaje_grasa?: boolean
    porcentaje_merma_limpieza?: boolean
    es_predeterminado?: boolean
    creado_en?: boolean
    ingrediente_base?: boolean | ingrediente_baseDefaultArgs<ExtArgs>
    proveedor?: boolean | proveedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo_proveedor"]>

  export type articulo_proveedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_articulo?: boolean
    id_componente?: boolean
    id_proveedor?: boolean
    marca_descripcion?: boolean
    costo_por_unidad?: boolean
    porcentaje_agua?: boolean
    porcentaje_grasa?: boolean
    porcentaje_merma_limpieza?: boolean
    es_predeterminado?: boolean
    creado_en?: boolean
    ingrediente_base?: boolean | ingrediente_baseDefaultArgs<ExtArgs>
    proveedor?: boolean | proveedorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo_proveedor"]>

  export type articulo_proveedorSelectScalar = {
    id_articulo?: boolean
    id_componente?: boolean
    id_proveedor?: boolean
    marca_descripcion?: boolean
    costo_por_unidad?: boolean
    porcentaje_agua?: boolean
    porcentaje_grasa?: boolean
    porcentaje_merma_limpieza?: boolean
    es_predeterminado?: boolean
    creado_en?: boolean
  }

  export type articulo_proveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_articulo" | "id_componente" | "id_proveedor" | "marca_descripcion" | "costo_por_unidad" | "porcentaje_agua" | "porcentaje_grasa" | "porcentaje_merma_limpieza" | "es_predeterminado" | "creado_en", ExtArgs["result"]["articulo_proveedor"]>
  export type articulo_proveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente_base?: boolean | ingrediente_baseDefaultArgs<ExtArgs>
    proveedor?: boolean | proveedorDefaultArgs<ExtArgs>
    detalle_formulacion?: boolean | articulo_proveedor$detalle_formulacionArgs<ExtArgs>
    _count?: boolean | Articulo_proveedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type articulo_proveedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente_base?: boolean | ingrediente_baseDefaultArgs<ExtArgs>
    proveedor?: boolean | proveedorDefaultArgs<ExtArgs>
  }
  export type articulo_proveedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente_base?: boolean | ingrediente_baseDefaultArgs<ExtArgs>
    proveedor?: boolean | proveedorDefaultArgs<ExtArgs>
  }

  export type $articulo_proveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articulo_proveedor"
    objects: {
      ingrediente_base: Prisma.$ingrediente_basePayload<ExtArgs>
      proveedor: Prisma.$proveedorPayload<ExtArgs>
      detalle_formulacion: Prisma.$detalle_formulacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_articulo: number
      id_componente: number
      id_proveedor: number
      marca_descripcion: string | null
      costo_por_unidad: Prisma.Decimal
      porcentaje_agua: Prisma.Decimal | null
      porcentaje_grasa: Prisma.Decimal | null
      porcentaje_merma_limpieza: Prisma.Decimal | null
      es_predeterminado: boolean | null
      creado_en: Date | null
    }, ExtArgs["result"]["articulo_proveedor"]>
    composites: {}
  }

  type articulo_proveedorGetPayload<S extends boolean | null | undefined | articulo_proveedorDefaultArgs> = $Result.GetResult<Prisma.$articulo_proveedorPayload, S>

  type articulo_proveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articulo_proveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Articulo_proveedorCountAggregateInputType | true
    }

  export interface articulo_proveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articulo_proveedor'], meta: { name: 'articulo_proveedor' } }
    /**
     * Find zero or one Articulo_proveedor that matches the filter.
     * @param {articulo_proveedorFindUniqueArgs} args - Arguments to find a Articulo_proveedor
     * @example
     * // Get one Articulo_proveedor
     * const articulo_proveedor = await prisma.articulo_proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articulo_proveedorFindUniqueArgs>(args: SelectSubset<T, articulo_proveedorFindUniqueArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articulo_proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articulo_proveedorFindUniqueOrThrowArgs} args - Arguments to find a Articulo_proveedor
     * @example
     * // Get one Articulo_proveedor
     * const articulo_proveedor = await prisma.articulo_proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articulo_proveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, articulo_proveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo_proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_proveedorFindFirstArgs} args - Arguments to find a Articulo_proveedor
     * @example
     * // Get one Articulo_proveedor
     * const articulo_proveedor = await prisma.articulo_proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articulo_proveedorFindFirstArgs>(args?: SelectSubset<T, articulo_proveedorFindFirstArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo_proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_proveedorFindFirstOrThrowArgs} args - Arguments to find a Articulo_proveedor
     * @example
     * // Get one Articulo_proveedor
     * const articulo_proveedor = await prisma.articulo_proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articulo_proveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, articulo_proveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articulo_proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_proveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articulo_proveedors
     * const articulo_proveedors = await prisma.articulo_proveedor.findMany()
     * 
     * // Get first 10 Articulo_proveedors
     * const articulo_proveedors = await prisma.articulo_proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id_articulo`
     * const articulo_proveedorWithId_articuloOnly = await prisma.articulo_proveedor.findMany({ select: { id_articulo: true } })
     * 
     */
    findMany<T extends articulo_proveedorFindManyArgs>(args?: SelectSubset<T, articulo_proveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articulo_proveedor.
     * @param {articulo_proveedorCreateArgs} args - Arguments to create a Articulo_proveedor.
     * @example
     * // Create one Articulo_proveedor
     * const Articulo_proveedor = await prisma.articulo_proveedor.create({
     *   data: {
     *     // ... data to create a Articulo_proveedor
     *   }
     * })
     * 
     */
    create<T extends articulo_proveedorCreateArgs>(args: SelectSubset<T, articulo_proveedorCreateArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articulo_proveedors.
     * @param {articulo_proveedorCreateManyArgs} args - Arguments to create many Articulo_proveedors.
     * @example
     * // Create many Articulo_proveedors
     * const articulo_proveedor = await prisma.articulo_proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articulo_proveedorCreateManyArgs>(args?: SelectSubset<T, articulo_proveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articulo_proveedors and returns the data saved in the database.
     * @param {articulo_proveedorCreateManyAndReturnArgs} args - Arguments to create many Articulo_proveedors.
     * @example
     * // Create many Articulo_proveedors
     * const articulo_proveedor = await prisma.articulo_proveedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articulo_proveedors and only return the `id_articulo`
     * const articulo_proveedorWithId_articuloOnly = await prisma.articulo_proveedor.createManyAndReturn({
     *   select: { id_articulo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends articulo_proveedorCreateManyAndReturnArgs>(args?: SelectSubset<T, articulo_proveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Articulo_proveedor.
     * @param {articulo_proveedorDeleteArgs} args - Arguments to delete one Articulo_proveedor.
     * @example
     * // Delete one Articulo_proveedor
     * const Articulo_proveedor = await prisma.articulo_proveedor.delete({
     *   where: {
     *     // ... filter to delete one Articulo_proveedor
     *   }
     * })
     * 
     */
    delete<T extends articulo_proveedorDeleteArgs>(args: SelectSubset<T, articulo_proveedorDeleteArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articulo_proveedor.
     * @param {articulo_proveedorUpdateArgs} args - Arguments to update one Articulo_proveedor.
     * @example
     * // Update one Articulo_proveedor
     * const articulo_proveedor = await prisma.articulo_proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articulo_proveedorUpdateArgs>(args: SelectSubset<T, articulo_proveedorUpdateArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articulo_proveedors.
     * @param {articulo_proveedorDeleteManyArgs} args - Arguments to filter Articulo_proveedors to delete.
     * @example
     * // Delete a few Articulo_proveedors
     * const { count } = await prisma.articulo_proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articulo_proveedorDeleteManyArgs>(args?: SelectSubset<T, articulo_proveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articulo_proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_proveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articulo_proveedors
     * const articulo_proveedor = await prisma.articulo_proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articulo_proveedorUpdateManyArgs>(args: SelectSubset<T, articulo_proveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articulo_proveedors and returns the data updated in the database.
     * @param {articulo_proveedorUpdateManyAndReturnArgs} args - Arguments to update many Articulo_proveedors.
     * @example
     * // Update many Articulo_proveedors
     * const articulo_proveedor = await prisma.articulo_proveedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articulo_proveedors and only return the `id_articulo`
     * const articulo_proveedorWithId_articuloOnly = await prisma.articulo_proveedor.updateManyAndReturn({
     *   select: { id_articulo: true },
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
    updateManyAndReturn<T extends articulo_proveedorUpdateManyAndReturnArgs>(args: SelectSubset<T, articulo_proveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Articulo_proveedor.
     * @param {articulo_proveedorUpsertArgs} args - Arguments to update or create a Articulo_proveedor.
     * @example
     * // Update or create a Articulo_proveedor
     * const articulo_proveedor = await prisma.articulo_proveedor.upsert({
     *   create: {
     *     // ... data to create a Articulo_proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articulo_proveedor we want to update
     *   }
     * })
     */
    upsert<T extends articulo_proveedorUpsertArgs>(args: SelectSubset<T, articulo_proveedorUpsertArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articulo_proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_proveedorCountArgs} args - Arguments to filter Articulo_proveedors to count.
     * @example
     * // Count the number of Articulo_proveedors
     * const count = await prisma.articulo_proveedor.count({
     *   where: {
     *     // ... the filter for the Articulo_proveedors we want to count
     *   }
     * })
    **/
    count<T extends articulo_proveedorCountArgs>(
      args?: Subset<T, articulo_proveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Articulo_proveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articulo_proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Articulo_proveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Articulo_proveedorAggregateArgs>(args: Subset<T, Articulo_proveedorAggregateArgs>): Prisma.PrismaPromise<GetArticulo_proveedorAggregateType<T>>

    /**
     * Group by Articulo_proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_proveedorGroupByArgs} args - Group by arguments.
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
      T extends articulo_proveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articulo_proveedorGroupByArgs['orderBy'] }
        : { orderBy?: articulo_proveedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articulo_proveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticulo_proveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articulo_proveedor model
   */
  readonly fields: articulo_proveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articulo_proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articulo_proveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingrediente_base<T extends ingrediente_baseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ingrediente_baseDefaultArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proveedor<T extends proveedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proveedorDefaultArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalle_formulacion<T extends articulo_proveedor$detalle_formulacionArgs<ExtArgs> = {}>(args?: Subset<T, articulo_proveedor$detalle_formulacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the articulo_proveedor model
   */
  interface articulo_proveedorFieldRefs {
    readonly id_articulo: FieldRef<"articulo_proveedor", 'Int'>
    readonly id_componente: FieldRef<"articulo_proveedor", 'Int'>
    readonly id_proveedor: FieldRef<"articulo_proveedor", 'Int'>
    readonly marca_descripcion: FieldRef<"articulo_proveedor", 'String'>
    readonly costo_por_unidad: FieldRef<"articulo_proveedor", 'Decimal'>
    readonly porcentaje_agua: FieldRef<"articulo_proveedor", 'Decimal'>
    readonly porcentaje_grasa: FieldRef<"articulo_proveedor", 'Decimal'>
    readonly porcentaje_merma_limpieza: FieldRef<"articulo_proveedor", 'Decimal'>
    readonly es_predeterminado: FieldRef<"articulo_proveedor", 'Boolean'>
    readonly creado_en: FieldRef<"articulo_proveedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * articulo_proveedor findUnique
   */
  export type articulo_proveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * Filter, which articulo_proveedor to fetch.
     */
    where: articulo_proveedorWhereUniqueInput
  }

  /**
   * articulo_proveedor findUniqueOrThrow
   */
  export type articulo_proveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * Filter, which articulo_proveedor to fetch.
     */
    where: articulo_proveedorWhereUniqueInput
  }

  /**
   * articulo_proveedor findFirst
   */
  export type articulo_proveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * Filter, which articulo_proveedor to fetch.
     */
    where?: articulo_proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_proveedors to fetch.
     */
    orderBy?: articulo_proveedorOrderByWithRelationInput | articulo_proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articulo_proveedors.
     */
    cursor?: articulo_proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articulo_proveedors.
     */
    distinct?: Articulo_proveedorScalarFieldEnum | Articulo_proveedorScalarFieldEnum[]
  }

  /**
   * articulo_proveedor findFirstOrThrow
   */
  export type articulo_proveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * Filter, which articulo_proveedor to fetch.
     */
    where?: articulo_proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_proveedors to fetch.
     */
    orderBy?: articulo_proveedorOrderByWithRelationInput | articulo_proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articulo_proveedors.
     */
    cursor?: articulo_proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articulo_proveedors.
     */
    distinct?: Articulo_proveedorScalarFieldEnum | Articulo_proveedorScalarFieldEnum[]
  }

  /**
   * articulo_proveedor findMany
   */
  export type articulo_proveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * Filter, which articulo_proveedors to fetch.
     */
    where?: articulo_proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_proveedors to fetch.
     */
    orderBy?: articulo_proveedorOrderByWithRelationInput | articulo_proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articulo_proveedors.
     */
    cursor?: articulo_proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_proveedors.
     */
    skip?: number
    distinct?: Articulo_proveedorScalarFieldEnum | Articulo_proveedorScalarFieldEnum[]
  }

  /**
   * articulo_proveedor create
   */
  export type articulo_proveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a articulo_proveedor.
     */
    data: XOR<articulo_proveedorCreateInput, articulo_proveedorUncheckedCreateInput>
  }

  /**
   * articulo_proveedor createMany
   */
  export type articulo_proveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articulo_proveedors.
     */
    data: articulo_proveedorCreateManyInput | articulo_proveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articulo_proveedor createManyAndReturn
   */
  export type articulo_proveedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * The data used to create many articulo_proveedors.
     */
    data: articulo_proveedorCreateManyInput | articulo_proveedorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * articulo_proveedor update
   */
  export type articulo_proveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a articulo_proveedor.
     */
    data: XOR<articulo_proveedorUpdateInput, articulo_proveedorUncheckedUpdateInput>
    /**
     * Choose, which articulo_proveedor to update.
     */
    where: articulo_proveedorWhereUniqueInput
  }

  /**
   * articulo_proveedor updateMany
   */
  export type articulo_proveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articulo_proveedors.
     */
    data: XOR<articulo_proveedorUpdateManyMutationInput, articulo_proveedorUncheckedUpdateManyInput>
    /**
     * Filter which articulo_proveedors to update
     */
    where?: articulo_proveedorWhereInput
    /**
     * Limit how many articulo_proveedors to update.
     */
    limit?: number
  }

  /**
   * articulo_proveedor updateManyAndReturn
   */
  export type articulo_proveedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * The data used to update articulo_proveedors.
     */
    data: XOR<articulo_proveedorUpdateManyMutationInput, articulo_proveedorUncheckedUpdateManyInput>
    /**
     * Filter which articulo_proveedors to update
     */
    where?: articulo_proveedorWhereInput
    /**
     * Limit how many articulo_proveedors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * articulo_proveedor upsert
   */
  export type articulo_proveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the articulo_proveedor to update in case it exists.
     */
    where: articulo_proveedorWhereUniqueInput
    /**
     * In case the articulo_proveedor found by the `where` argument doesn't exist, create a new articulo_proveedor with this data.
     */
    create: XOR<articulo_proveedorCreateInput, articulo_proveedorUncheckedCreateInput>
    /**
     * In case the articulo_proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articulo_proveedorUpdateInput, articulo_proveedorUncheckedUpdateInput>
  }

  /**
   * articulo_proveedor delete
   */
  export type articulo_proveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    /**
     * Filter which articulo_proveedor to delete.
     */
    where: articulo_proveedorWhereUniqueInput
  }

  /**
   * articulo_proveedor deleteMany
   */
  export type articulo_proveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articulo_proveedors to delete
     */
    where?: articulo_proveedorWhereInput
    /**
     * Limit how many articulo_proveedors to delete.
     */
    limit?: number
  }

  /**
   * articulo_proveedor.detalle_formulacion
   */
  export type articulo_proveedor$detalle_formulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    where?: detalle_formulacionWhereInput
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    cursor?: detalle_formulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_formulacionScalarFieldEnum | Detalle_formulacionScalarFieldEnum[]
  }

  /**
   * articulo_proveedor without action
   */
  export type articulo_proveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
  }


  /**
   * Model catalogo_componente
   */

  export type AggregateCatalogo_componente = {
    _count: Catalogo_componenteCountAggregateOutputType | null
    _avg: Catalogo_componenteAvgAggregateOutputType | null
    _sum: Catalogo_componenteSumAggregateOutputType | null
    _min: Catalogo_componenteMinAggregateOutputType | null
    _max: Catalogo_componenteMaxAggregateOutputType | null
  }

  export type Catalogo_componenteAvgAggregateOutputType = {
    id_componente: number | null
  }

  export type Catalogo_componenteSumAggregateOutputType = {
    id_componente: number | null
  }

  export type Catalogo_componenteMinAggregateOutputType = {
    id_componente: number | null
    nombre: string | null
    tipo_componente: string | null
    unidad_medida: string | null
    activo: boolean | null
  }

  export type Catalogo_componenteMaxAggregateOutputType = {
    id_componente: number | null
    nombre: string | null
    tipo_componente: string | null
    unidad_medida: string | null
    activo: boolean | null
  }

  export type Catalogo_componenteCountAggregateOutputType = {
    id_componente: number
    nombre: number
    tipo_componente: number
    unidad_medida: number
    activo: number
    _all: number
  }


  export type Catalogo_componenteAvgAggregateInputType = {
    id_componente?: true
  }

  export type Catalogo_componenteSumAggregateInputType = {
    id_componente?: true
  }

  export type Catalogo_componenteMinAggregateInputType = {
    id_componente?: true
    nombre?: true
    tipo_componente?: true
    unidad_medida?: true
    activo?: true
  }

  export type Catalogo_componenteMaxAggregateInputType = {
    id_componente?: true
    nombre?: true
    tipo_componente?: true
    unidad_medida?: true
    activo?: true
  }

  export type Catalogo_componenteCountAggregateInputType = {
    id_componente?: true
    nombre?: true
    tipo_componente?: true
    unidad_medida?: true
    activo?: true
    _all?: true
  }

  export type Catalogo_componenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which catalogo_componente to aggregate.
     */
    where?: catalogo_componenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogo_componentes to fetch.
     */
    orderBy?: catalogo_componenteOrderByWithRelationInput | catalogo_componenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: catalogo_componenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogo_componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogo_componentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned catalogo_componentes
    **/
    _count?: true | Catalogo_componenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Catalogo_componenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Catalogo_componenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Catalogo_componenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Catalogo_componenteMaxAggregateInputType
  }

  export type GetCatalogo_componenteAggregateType<T extends Catalogo_componenteAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogo_componente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogo_componente[P]>
      : GetScalarType<T[P], AggregateCatalogo_componente[P]>
  }




  export type catalogo_componenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: catalogo_componenteWhereInput
    orderBy?: catalogo_componenteOrderByWithAggregationInput | catalogo_componenteOrderByWithAggregationInput[]
    by: Catalogo_componenteScalarFieldEnum[] | Catalogo_componenteScalarFieldEnum
    having?: catalogo_componenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Catalogo_componenteCountAggregateInputType | true
    _avg?: Catalogo_componenteAvgAggregateInputType
    _sum?: Catalogo_componenteSumAggregateInputType
    _min?: Catalogo_componenteMinAggregateInputType
    _max?: Catalogo_componenteMaxAggregateInputType
  }

  export type Catalogo_componenteGroupByOutputType = {
    id_componente: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo: boolean | null
    _count: Catalogo_componenteCountAggregateOutputType | null
    _avg: Catalogo_componenteAvgAggregateOutputType | null
    _sum: Catalogo_componenteSumAggregateOutputType | null
    _min: Catalogo_componenteMinAggregateOutputType | null
    _max: Catalogo_componenteMaxAggregateOutputType | null
  }

  type GetCatalogo_componenteGroupByPayload<T extends catalogo_componenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Catalogo_componenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Catalogo_componenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Catalogo_componenteGroupByOutputType[P]>
            : GetScalarType<T[P], Catalogo_componenteGroupByOutputType[P]>
        }
      >
    >


  export type catalogo_componenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    nombre?: boolean
    tipo_componente?: boolean
    unidad_medida?: boolean
    activo?: boolean
    detalle_formulacion?: boolean | catalogo_componente$detalle_formulacionArgs<ExtArgs>
    ingrediente_base?: boolean | catalogo_componente$ingrediente_baseArgs<ExtArgs>
    receta_subreceta?: boolean | catalogo_componente$receta_subrecetaArgs<ExtArgs>
    servicio_costo?: boolean | catalogo_componente$servicio_costoArgs<ExtArgs>
    _count?: boolean | Catalogo_componenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo_componente"]>

  export type catalogo_componenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    nombre?: boolean
    tipo_componente?: boolean
    unidad_medida?: boolean
    activo?: boolean
  }, ExtArgs["result"]["catalogo_componente"]>

  export type catalogo_componenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    nombre?: boolean
    tipo_componente?: boolean
    unidad_medida?: boolean
    activo?: boolean
  }, ExtArgs["result"]["catalogo_componente"]>

  export type catalogo_componenteSelectScalar = {
    id_componente?: boolean
    nombre?: boolean
    tipo_componente?: boolean
    unidad_medida?: boolean
    activo?: boolean
  }

  export type catalogo_componenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_componente" | "nombre" | "tipo_componente" | "unidad_medida" | "activo", ExtArgs["result"]["catalogo_componente"]>
  export type catalogo_componenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_formulacion?: boolean | catalogo_componente$detalle_formulacionArgs<ExtArgs>
    ingrediente_base?: boolean | catalogo_componente$ingrediente_baseArgs<ExtArgs>
    receta_subreceta?: boolean | catalogo_componente$receta_subrecetaArgs<ExtArgs>
    servicio_costo?: boolean | catalogo_componente$servicio_costoArgs<ExtArgs>
    _count?: boolean | Catalogo_componenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type catalogo_componenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type catalogo_componenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $catalogo_componentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "catalogo_componente"
    objects: {
      detalle_formulacion: Prisma.$detalle_formulacionPayload<ExtArgs>[]
      ingrediente_base: Prisma.$ingrediente_basePayload<ExtArgs> | null
      receta_subreceta: Prisma.$receta_subrecetaPayload<ExtArgs> | null
      servicio_costo: Prisma.$servicio_costoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_componente: number
      nombre: string
      tipo_componente: string
      unidad_medida: string
      activo: boolean | null
    }, ExtArgs["result"]["catalogo_componente"]>
    composites: {}
  }

  type catalogo_componenteGetPayload<S extends boolean | null | undefined | catalogo_componenteDefaultArgs> = $Result.GetResult<Prisma.$catalogo_componentePayload, S>

  type catalogo_componenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<catalogo_componenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Catalogo_componenteCountAggregateInputType | true
    }

  export interface catalogo_componenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['catalogo_componente'], meta: { name: 'catalogo_componente' } }
    /**
     * Find zero or one Catalogo_componente that matches the filter.
     * @param {catalogo_componenteFindUniqueArgs} args - Arguments to find a Catalogo_componente
     * @example
     * // Get one Catalogo_componente
     * const catalogo_componente = await prisma.catalogo_componente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends catalogo_componenteFindUniqueArgs>(args: SelectSubset<T, catalogo_componenteFindUniqueArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Catalogo_componente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {catalogo_componenteFindUniqueOrThrowArgs} args - Arguments to find a Catalogo_componente
     * @example
     * // Get one Catalogo_componente
     * const catalogo_componente = await prisma.catalogo_componente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends catalogo_componenteFindUniqueOrThrowArgs>(args: SelectSubset<T, catalogo_componenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalogo_componente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogo_componenteFindFirstArgs} args - Arguments to find a Catalogo_componente
     * @example
     * // Get one Catalogo_componente
     * const catalogo_componente = await prisma.catalogo_componente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends catalogo_componenteFindFirstArgs>(args?: SelectSubset<T, catalogo_componenteFindFirstArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalogo_componente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogo_componenteFindFirstOrThrowArgs} args - Arguments to find a Catalogo_componente
     * @example
     * // Get one Catalogo_componente
     * const catalogo_componente = await prisma.catalogo_componente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends catalogo_componenteFindFirstOrThrowArgs>(args?: SelectSubset<T, catalogo_componenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Catalogo_componentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogo_componenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogo_componentes
     * const catalogo_componentes = await prisma.catalogo_componente.findMany()
     * 
     * // Get first 10 Catalogo_componentes
     * const catalogo_componentes = await prisma.catalogo_componente.findMany({ take: 10 })
     * 
     * // Only select the `id_componente`
     * const catalogo_componenteWithId_componenteOnly = await prisma.catalogo_componente.findMany({ select: { id_componente: true } })
     * 
     */
    findMany<T extends catalogo_componenteFindManyArgs>(args?: SelectSubset<T, catalogo_componenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Catalogo_componente.
     * @param {catalogo_componenteCreateArgs} args - Arguments to create a Catalogo_componente.
     * @example
     * // Create one Catalogo_componente
     * const Catalogo_componente = await prisma.catalogo_componente.create({
     *   data: {
     *     // ... data to create a Catalogo_componente
     *   }
     * })
     * 
     */
    create<T extends catalogo_componenteCreateArgs>(args: SelectSubset<T, catalogo_componenteCreateArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Catalogo_componentes.
     * @param {catalogo_componenteCreateManyArgs} args - Arguments to create many Catalogo_componentes.
     * @example
     * // Create many Catalogo_componentes
     * const catalogo_componente = await prisma.catalogo_componente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends catalogo_componenteCreateManyArgs>(args?: SelectSubset<T, catalogo_componenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Catalogo_componentes and returns the data saved in the database.
     * @param {catalogo_componenteCreateManyAndReturnArgs} args - Arguments to create many Catalogo_componentes.
     * @example
     * // Create many Catalogo_componentes
     * const catalogo_componente = await prisma.catalogo_componente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Catalogo_componentes and only return the `id_componente`
     * const catalogo_componenteWithId_componenteOnly = await prisma.catalogo_componente.createManyAndReturn({
     *   select: { id_componente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends catalogo_componenteCreateManyAndReturnArgs>(args?: SelectSubset<T, catalogo_componenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Catalogo_componente.
     * @param {catalogo_componenteDeleteArgs} args - Arguments to delete one Catalogo_componente.
     * @example
     * // Delete one Catalogo_componente
     * const Catalogo_componente = await prisma.catalogo_componente.delete({
     *   where: {
     *     // ... filter to delete one Catalogo_componente
     *   }
     * })
     * 
     */
    delete<T extends catalogo_componenteDeleteArgs>(args: SelectSubset<T, catalogo_componenteDeleteArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Catalogo_componente.
     * @param {catalogo_componenteUpdateArgs} args - Arguments to update one Catalogo_componente.
     * @example
     * // Update one Catalogo_componente
     * const catalogo_componente = await prisma.catalogo_componente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends catalogo_componenteUpdateArgs>(args: SelectSubset<T, catalogo_componenteUpdateArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Catalogo_componentes.
     * @param {catalogo_componenteDeleteManyArgs} args - Arguments to filter Catalogo_componentes to delete.
     * @example
     * // Delete a few Catalogo_componentes
     * const { count } = await prisma.catalogo_componente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends catalogo_componenteDeleteManyArgs>(args?: SelectSubset<T, catalogo_componenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogo_componentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogo_componenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogo_componentes
     * const catalogo_componente = await prisma.catalogo_componente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends catalogo_componenteUpdateManyArgs>(args: SelectSubset<T, catalogo_componenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogo_componentes and returns the data updated in the database.
     * @param {catalogo_componenteUpdateManyAndReturnArgs} args - Arguments to update many Catalogo_componentes.
     * @example
     * // Update many Catalogo_componentes
     * const catalogo_componente = await prisma.catalogo_componente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Catalogo_componentes and only return the `id_componente`
     * const catalogo_componenteWithId_componenteOnly = await prisma.catalogo_componente.updateManyAndReturn({
     *   select: { id_componente: true },
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
    updateManyAndReturn<T extends catalogo_componenteUpdateManyAndReturnArgs>(args: SelectSubset<T, catalogo_componenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Catalogo_componente.
     * @param {catalogo_componenteUpsertArgs} args - Arguments to update or create a Catalogo_componente.
     * @example
     * // Update or create a Catalogo_componente
     * const catalogo_componente = await prisma.catalogo_componente.upsert({
     *   create: {
     *     // ... data to create a Catalogo_componente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalogo_componente we want to update
     *   }
     * })
     */
    upsert<T extends catalogo_componenteUpsertArgs>(args: SelectSubset<T, catalogo_componenteUpsertArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Catalogo_componentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogo_componenteCountArgs} args - Arguments to filter Catalogo_componentes to count.
     * @example
     * // Count the number of Catalogo_componentes
     * const count = await prisma.catalogo_componente.count({
     *   where: {
     *     // ... the filter for the Catalogo_componentes we want to count
     *   }
     * })
    **/
    count<T extends catalogo_componenteCountArgs>(
      args?: Subset<T, catalogo_componenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Catalogo_componenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalogo_componente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Catalogo_componenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Catalogo_componenteAggregateArgs>(args: Subset<T, Catalogo_componenteAggregateArgs>): Prisma.PrismaPromise<GetCatalogo_componenteAggregateType<T>>

    /**
     * Group by Catalogo_componente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catalogo_componenteGroupByArgs} args - Group by arguments.
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
      T extends catalogo_componenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: catalogo_componenteGroupByArgs['orderBy'] }
        : { orderBy?: catalogo_componenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, catalogo_componenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogo_componenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the catalogo_componente model
   */
  readonly fields: catalogo_componenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for catalogo_componente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__catalogo_componenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_formulacion<T extends catalogo_componente$detalle_formulacionArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componente$detalle_formulacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingrediente_base<T extends catalogo_componente$ingrediente_baseArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componente$ingrediente_baseArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receta_subreceta<T extends catalogo_componente$receta_subrecetaArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componente$receta_subrecetaArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    servicio_costo<T extends catalogo_componente$servicio_costoArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componente$servicio_costoArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the catalogo_componente model
   */
  interface catalogo_componenteFieldRefs {
    readonly id_componente: FieldRef<"catalogo_componente", 'Int'>
    readonly nombre: FieldRef<"catalogo_componente", 'String'>
    readonly tipo_componente: FieldRef<"catalogo_componente", 'String'>
    readonly unidad_medida: FieldRef<"catalogo_componente", 'String'>
    readonly activo: FieldRef<"catalogo_componente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * catalogo_componente findUnique
   */
  export type catalogo_componenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * Filter, which catalogo_componente to fetch.
     */
    where: catalogo_componenteWhereUniqueInput
  }

  /**
   * catalogo_componente findUniqueOrThrow
   */
  export type catalogo_componenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * Filter, which catalogo_componente to fetch.
     */
    where: catalogo_componenteWhereUniqueInput
  }

  /**
   * catalogo_componente findFirst
   */
  export type catalogo_componenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * Filter, which catalogo_componente to fetch.
     */
    where?: catalogo_componenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogo_componentes to fetch.
     */
    orderBy?: catalogo_componenteOrderByWithRelationInput | catalogo_componenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for catalogo_componentes.
     */
    cursor?: catalogo_componenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogo_componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogo_componentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of catalogo_componentes.
     */
    distinct?: Catalogo_componenteScalarFieldEnum | Catalogo_componenteScalarFieldEnum[]
  }

  /**
   * catalogo_componente findFirstOrThrow
   */
  export type catalogo_componenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * Filter, which catalogo_componente to fetch.
     */
    where?: catalogo_componenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogo_componentes to fetch.
     */
    orderBy?: catalogo_componenteOrderByWithRelationInput | catalogo_componenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for catalogo_componentes.
     */
    cursor?: catalogo_componenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogo_componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogo_componentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of catalogo_componentes.
     */
    distinct?: Catalogo_componenteScalarFieldEnum | Catalogo_componenteScalarFieldEnum[]
  }

  /**
   * catalogo_componente findMany
   */
  export type catalogo_componenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * Filter, which catalogo_componentes to fetch.
     */
    where?: catalogo_componenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of catalogo_componentes to fetch.
     */
    orderBy?: catalogo_componenteOrderByWithRelationInput | catalogo_componenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing catalogo_componentes.
     */
    cursor?: catalogo_componenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` catalogo_componentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` catalogo_componentes.
     */
    skip?: number
    distinct?: Catalogo_componenteScalarFieldEnum | Catalogo_componenteScalarFieldEnum[]
  }

  /**
   * catalogo_componente create
   */
  export type catalogo_componenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * The data needed to create a catalogo_componente.
     */
    data: XOR<catalogo_componenteCreateInput, catalogo_componenteUncheckedCreateInput>
  }

  /**
   * catalogo_componente createMany
   */
  export type catalogo_componenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many catalogo_componentes.
     */
    data: catalogo_componenteCreateManyInput | catalogo_componenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * catalogo_componente createManyAndReturn
   */
  export type catalogo_componenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * The data used to create many catalogo_componentes.
     */
    data: catalogo_componenteCreateManyInput | catalogo_componenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * catalogo_componente update
   */
  export type catalogo_componenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * The data needed to update a catalogo_componente.
     */
    data: XOR<catalogo_componenteUpdateInput, catalogo_componenteUncheckedUpdateInput>
    /**
     * Choose, which catalogo_componente to update.
     */
    where: catalogo_componenteWhereUniqueInput
  }

  /**
   * catalogo_componente updateMany
   */
  export type catalogo_componenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update catalogo_componentes.
     */
    data: XOR<catalogo_componenteUpdateManyMutationInput, catalogo_componenteUncheckedUpdateManyInput>
    /**
     * Filter which catalogo_componentes to update
     */
    where?: catalogo_componenteWhereInput
    /**
     * Limit how many catalogo_componentes to update.
     */
    limit?: number
  }

  /**
   * catalogo_componente updateManyAndReturn
   */
  export type catalogo_componenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * The data used to update catalogo_componentes.
     */
    data: XOR<catalogo_componenteUpdateManyMutationInput, catalogo_componenteUncheckedUpdateManyInput>
    /**
     * Filter which catalogo_componentes to update
     */
    where?: catalogo_componenteWhereInput
    /**
     * Limit how many catalogo_componentes to update.
     */
    limit?: number
  }

  /**
   * catalogo_componente upsert
   */
  export type catalogo_componenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * The filter to search for the catalogo_componente to update in case it exists.
     */
    where: catalogo_componenteWhereUniqueInput
    /**
     * In case the catalogo_componente found by the `where` argument doesn't exist, create a new catalogo_componente with this data.
     */
    create: XOR<catalogo_componenteCreateInput, catalogo_componenteUncheckedCreateInput>
    /**
     * In case the catalogo_componente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<catalogo_componenteUpdateInput, catalogo_componenteUncheckedUpdateInput>
  }

  /**
   * catalogo_componente delete
   */
  export type catalogo_componenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
    /**
     * Filter which catalogo_componente to delete.
     */
    where: catalogo_componenteWhereUniqueInput
  }

  /**
   * catalogo_componente deleteMany
   */
  export type catalogo_componenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which catalogo_componentes to delete
     */
    where?: catalogo_componenteWhereInput
    /**
     * Limit how many catalogo_componentes to delete.
     */
    limit?: number
  }

  /**
   * catalogo_componente.detalle_formulacion
   */
  export type catalogo_componente$detalle_formulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    where?: detalle_formulacionWhereInput
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    cursor?: detalle_formulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_formulacionScalarFieldEnum | Detalle_formulacionScalarFieldEnum[]
  }

  /**
   * catalogo_componente.ingrediente_base
   */
  export type catalogo_componente$ingrediente_baseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    where?: ingrediente_baseWhereInput
  }

  /**
   * catalogo_componente.receta_subreceta
   */
  export type catalogo_componente$receta_subrecetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    where?: receta_subrecetaWhereInput
  }

  /**
   * catalogo_componente.servicio_costo
   */
  export type catalogo_componente$servicio_costoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    where?: servicio_costoWhereInput
  }

  /**
   * catalogo_componente without action
   */
  export type catalogo_componenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the catalogo_componente
     */
    select?: catalogo_componenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the catalogo_componente
     */
    omit?: catalogo_componenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: catalogo_componenteInclude<ExtArgs> | null
  }


  /**
   * Model detalle_formulacion
   */

  export type AggregateDetalle_formulacion = {
    _count: Detalle_formulacionCountAggregateOutputType | null
    _avg: Detalle_formulacionAvgAggregateOutputType | null
    _sum: Detalle_formulacionSumAggregateOutputType | null
    _min: Detalle_formulacionMinAggregateOutputType | null
    _max: Detalle_formulacionMaxAggregateOutputType | null
  }

  export type Detalle_formulacionAvgAggregateOutputType = {
    id_detalle: number | null
    id_receta_padre: number | null
    id_componente_hijo: number | null
    id_articulo_especifico: number | null
    cantidad_usada: Decimal | null
  }

  export type Detalle_formulacionSumAggregateOutputType = {
    id_detalle: number | null
    id_receta_padre: number | null
    id_componente_hijo: number | null
    id_articulo_especifico: number | null
    cantidad_usada: Decimal | null
  }

  export type Detalle_formulacionMinAggregateOutputType = {
    id_detalle: number | null
    id_receta_padre: number | null
    id_componente_hijo: number | null
    id_articulo_especifico: number | null
    cantidad_usada: Decimal | null
    unidad_medida_usada: string | null
    nota_preparacion: string | null
  }

  export type Detalle_formulacionMaxAggregateOutputType = {
    id_detalle: number | null
    id_receta_padre: number | null
    id_componente_hijo: number | null
    id_articulo_especifico: number | null
    cantidad_usada: Decimal | null
    unidad_medida_usada: string | null
    nota_preparacion: string | null
  }

  export type Detalle_formulacionCountAggregateOutputType = {
    id_detalle: number
    id_receta_padre: number
    id_componente_hijo: number
    id_articulo_especifico: number
    cantidad_usada: number
    unidad_medida_usada: number
    nota_preparacion: number
    _all: number
  }


  export type Detalle_formulacionAvgAggregateInputType = {
    id_detalle?: true
    id_receta_padre?: true
    id_componente_hijo?: true
    id_articulo_especifico?: true
    cantidad_usada?: true
  }

  export type Detalle_formulacionSumAggregateInputType = {
    id_detalle?: true
    id_receta_padre?: true
    id_componente_hijo?: true
    id_articulo_especifico?: true
    cantidad_usada?: true
  }

  export type Detalle_formulacionMinAggregateInputType = {
    id_detalle?: true
    id_receta_padre?: true
    id_componente_hijo?: true
    id_articulo_especifico?: true
    cantidad_usada?: true
    unidad_medida_usada?: true
    nota_preparacion?: true
  }

  export type Detalle_formulacionMaxAggregateInputType = {
    id_detalle?: true
    id_receta_padre?: true
    id_componente_hijo?: true
    id_articulo_especifico?: true
    cantidad_usada?: true
    unidad_medida_usada?: true
    nota_preparacion?: true
  }

  export type Detalle_formulacionCountAggregateInputType = {
    id_detalle?: true
    id_receta_padre?: true
    id_componente_hijo?: true
    id_articulo_especifico?: true
    cantidad_usada?: true
    unidad_medida_usada?: true
    nota_preparacion?: true
    _all?: true
  }

  export type Detalle_formulacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_formulacion to aggregate.
     */
    where?: detalle_formulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_formulacions to fetch.
     */
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_formulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_formulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_formulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_formulacions
    **/
    _count?: true | Detalle_formulacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_formulacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_formulacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_formulacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_formulacionMaxAggregateInputType
  }

  export type GetDetalle_formulacionAggregateType<T extends Detalle_formulacionAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_formulacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_formulacion[P]>
      : GetScalarType<T[P], AggregateDetalle_formulacion[P]>
  }




  export type detalle_formulacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_formulacionWhereInput
    orderBy?: detalle_formulacionOrderByWithAggregationInput | detalle_formulacionOrderByWithAggregationInput[]
    by: Detalle_formulacionScalarFieldEnum[] | Detalle_formulacionScalarFieldEnum
    having?: detalle_formulacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_formulacionCountAggregateInputType | true
    _avg?: Detalle_formulacionAvgAggregateInputType
    _sum?: Detalle_formulacionSumAggregateInputType
    _min?: Detalle_formulacionMinAggregateInputType
    _max?: Detalle_formulacionMaxAggregateInputType
  }

  export type Detalle_formulacionGroupByOutputType = {
    id_detalle: number
    id_receta_padre: number
    id_componente_hijo: number
    id_articulo_especifico: number | null
    cantidad_usada: Decimal
    unidad_medida_usada: string
    nota_preparacion: string | null
    _count: Detalle_formulacionCountAggregateOutputType | null
    _avg: Detalle_formulacionAvgAggregateOutputType | null
    _sum: Detalle_formulacionSumAggregateOutputType | null
    _min: Detalle_formulacionMinAggregateOutputType | null
    _max: Detalle_formulacionMaxAggregateOutputType | null
  }

  type GetDetalle_formulacionGroupByPayload<T extends detalle_formulacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_formulacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_formulacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_formulacionGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_formulacionGroupByOutputType[P]>
        }
      >
    >


  export type detalle_formulacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_receta_padre?: boolean
    id_componente_hijo?: boolean
    id_articulo_especifico?: boolean
    cantidad_usada?: boolean
    unidad_medida_usada?: boolean
    nota_preparacion?: boolean
    articulo_proveedor?: boolean | detalle_formulacion$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    receta_subreceta?: boolean | receta_subrecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_formulacion"]>

  export type detalle_formulacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_receta_padre?: boolean
    id_componente_hijo?: boolean
    id_articulo_especifico?: boolean
    cantidad_usada?: boolean
    unidad_medida_usada?: boolean
    nota_preparacion?: boolean
    articulo_proveedor?: boolean | detalle_formulacion$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    receta_subreceta?: boolean | receta_subrecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_formulacion"]>

  export type detalle_formulacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_receta_padre?: boolean
    id_componente_hijo?: boolean
    id_articulo_especifico?: boolean
    cantidad_usada?: boolean
    unidad_medida_usada?: boolean
    nota_preparacion?: boolean
    articulo_proveedor?: boolean | detalle_formulacion$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    receta_subreceta?: boolean | receta_subrecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_formulacion"]>

  export type detalle_formulacionSelectScalar = {
    id_detalle?: boolean
    id_receta_padre?: boolean
    id_componente_hijo?: boolean
    id_articulo_especifico?: boolean
    cantidad_usada?: boolean
    unidad_medida_usada?: boolean
    nota_preparacion?: boolean
  }

  export type detalle_formulacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle" | "id_receta_padre" | "id_componente_hijo" | "id_articulo_especifico" | "cantidad_usada" | "unidad_medida_usada" | "nota_preparacion", ExtArgs["result"]["detalle_formulacion"]>
  export type detalle_formulacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | detalle_formulacion$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    receta_subreceta?: boolean | receta_subrecetaDefaultArgs<ExtArgs>
  }
  export type detalle_formulacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | detalle_formulacion$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    receta_subreceta?: boolean | receta_subrecetaDefaultArgs<ExtArgs>
  }
  export type detalle_formulacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | detalle_formulacion$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    receta_subreceta?: boolean | receta_subrecetaDefaultArgs<ExtArgs>
  }

  export type $detalle_formulacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_formulacion"
    objects: {
      articulo_proveedor: Prisma.$articulo_proveedorPayload<ExtArgs> | null
      catalogo_componente: Prisma.$catalogo_componentePayload<ExtArgs>
      receta_subreceta: Prisma.$receta_subrecetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle: number
      id_receta_padre: number
      id_componente_hijo: number
      id_articulo_especifico: number | null
      cantidad_usada: Prisma.Decimal
      unidad_medida_usada: string
      nota_preparacion: string | null
    }, ExtArgs["result"]["detalle_formulacion"]>
    composites: {}
  }

  type detalle_formulacionGetPayload<S extends boolean | null | undefined | detalle_formulacionDefaultArgs> = $Result.GetResult<Prisma.$detalle_formulacionPayload, S>

  type detalle_formulacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_formulacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_formulacionCountAggregateInputType | true
    }

  export interface detalle_formulacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_formulacion'], meta: { name: 'detalle_formulacion' } }
    /**
     * Find zero or one Detalle_formulacion that matches the filter.
     * @param {detalle_formulacionFindUniqueArgs} args - Arguments to find a Detalle_formulacion
     * @example
     * // Get one Detalle_formulacion
     * const detalle_formulacion = await prisma.detalle_formulacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_formulacionFindUniqueArgs>(args: SelectSubset<T, detalle_formulacionFindUniqueArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_formulacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_formulacionFindUniqueOrThrowArgs} args - Arguments to find a Detalle_formulacion
     * @example
     * // Get one Detalle_formulacion
     * const detalle_formulacion = await prisma.detalle_formulacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_formulacionFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_formulacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_formulacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_formulacionFindFirstArgs} args - Arguments to find a Detalle_formulacion
     * @example
     * // Get one Detalle_formulacion
     * const detalle_formulacion = await prisma.detalle_formulacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_formulacionFindFirstArgs>(args?: SelectSubset<T, detalle_formulacionFindFirstArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_formulacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_formulacionFindFirstOrThrowArgs} args - Arguments to find a Detalle_formulacion
     * @example
     * // Get one Detalle_formulacion
     * const detalle_formulacion = await prisma.detalle_formulacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_formulacionFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_formulacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_formulacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_formulacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_formulacions
     * const detalle_formulacions = await prisma.detalle_formulacion.findMany()
     * 
     * // Get first 10 Detalle_formulacions
     * const detalle_formulacions = await prisma.detalle_formulacion.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle`
     * const detalle_formulacionWithId_detalleOnly = await prisma.detalle_formulacion.findMany({ select: { id_detalle: true } })
     * 
     */
    findMany<T extends detalle_formulacionFindManyArgs>(args?: SelectSubset<T, detalle_formulacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_formulacion.
     * @param {detalle_formulacionCreateArgs} args - Arguments to create a Detalle_formulacion.
     * @example
     * // Create one Detalle_formulacion
     * const Detalle_formulacion = await prisma.detalle_formulacion.create({
     *   data: {
     *     // ... data to create a Detalle_formulacion
     *   }
     * })
     * 
     */
    create<T extends detalle_formulacionCreateArgs>(args: SelectSubset<T, detalle_formulacionCreateArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_formulacions.
     * @param {detalle_formulacionCreateManyArgs} args - Arguments to create many Detalle_formulacions.
     * @example
     * // Create many Detalle_formulacions
     * const detalle_formulacion = await prisma.detalle_formulacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_formulacionCreateManyArgs>(args?: SelectSubset<T, detalle_formulacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalle_formulacions and returns the data saved in the database.
     * @param {detalle_formulacionCreateManyAndReturnArgs} args - Arguments to create many Detalle_formulacions.
     * @example
     * // Create many Detalle_formulacions
     * const detalle_formulacion = await prisma.detalle_formulacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalle_formulacions and only return the `id_detalle`
     * const detalle_formulacionWithId_detalleOnly = await prisma.detalle_formulacion.createManyAndReturn({
     *   select: { id_detalle: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalle_formulacionCreateManyAndReturnArgs>(args?: SelectSubset<T, detalle_formulacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalle_formulacion.
     * @param {detalle_formulacionDeleteArgs} args - Arguments to delete one Detalle_formulacion.
     * @example
     * // Delete one Detalle_formulacion
     * const Detalle_formulacion = await prisma.detalle_formulacion.delete({
     *   where: {
     *     // ... filter to delete one Detalle_formulacion
     *   }
     * })
     * 
     */
    delete<T extends detalle_formulacionDeleteArgs>(args: SelectSubset<T, detalle_formulacionDeleteArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_formulacion.
     * @param {detalle_formulacionUpdateArgs} args - Arguments to update one Detalle_formulacion.
     * @example
     * // Update one Detalle_formulacion
     * const detalle_formulacion = await prisma.detalle_formulacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_formulacionUpdateArgs>(args: SelectSubset<T, detalle_formulacionUpdateArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_formulacions.
     * @param {detalle_formulacionDeleteManyArgs} args - Arguments to filter Detalle_formulacions to delete.
     * @example
     * // Delete a few Detalle_formulacions
     * const { count } = await prisma.detalle_formulacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_formulacionDeleteManyArgs>(args?: SelectSubset<T, detalle_formulacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_formulacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_formulacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_formulacions
     * const detalle_formulacion = await prisma.detalle_formulacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_formulacionUpdateManyArgs>(args: SelectSubset<T, detalle_formulacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_formulacions and returns the data updated in the database.
     * @param {detalle_formulacionUpdateManyAndReturnArgs} args - Arguments to update many Detalle_formulacions.
     * @example
     * // Update many Detalle_formulacions
     * const detalle_formulacion = await prisma.detalle_formulacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalle_formulacions and only return the `id_detalle`
     * const detalle_formulacionWithId_detalleOnly = await prisma.detalle_formulacion.updateManyAndReturn({
     *   select: { id_detalle: true },
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
    updateManyAndReturn<T extends detalle_formulacionUpdateManyAndReturnArgs>(args: SelectSubset<T, detalle_formulacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalle_formulacion.
     * @param {detalle_formulacionUpsertArgs} args - Arguments to update or create a Detalle_formulacion.
     * @example
     * // Update or create a Detalle_formulacion
     * const detalle_formulacion = await prisma.detalle_formulacion.upsert({
     *   create: {
     *     // ... data to create a Detalle_formulacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_formulacion we want to update
     *   }
     * })
     */
    upsert<T extends detalle_formulacionUpsertArgs>(args: SelectSubset<T, detalle_formulacionUpsertArgs<ExtArgs>>): Prisma__detalle_formulacionClient<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_formulacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_formulacionCountArgs} args - Arguments to filter Detalle_formulacions to count.
     * @example
     * // Count the number of Detalle_formulacions
     * const count = await prisma.detalle_formulacion.count({
     *   where: {
     *     // ... the filter for the Detalle_formulacions we want to count
     *   }
     * })
    **/
    count<T extends detalle_formulacionCountArgs>(
      args?: Subset<T, detalle_formulacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_formulacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_formulacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_formulacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Detalle_formulacionAggregateArgs>(args: Subset<T, Detalle_formulacionAggregateArgs>): Prisma.PrismaPromise<GetDetalle_formulacionAggregateType<T>>

    /**
     * Group by Detalle_formulacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_formulacionGroupByArgs} args - Group by arguments.
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
      T extends detalle_formulacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_formulacionGroupByArgs['orderBy'] }
        : { orderBy?: detalle_formulacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detalle_formulacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_formulacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_formulacion model
   */
  readonly fields: detalle_formulacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_formulacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_formulacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulo_proveedor<T extends detalle_formulacion$articulo_proveedorArgs<ExtArgs> = {}>(args?: Subset<T, detalle_formulacion$articulo_proveedorArgs<ExtArgs>>): Prisma__articulo_proveedorClient<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    catalogo_componente<T extends catalogo_componenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componenteDefaultArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receta_subreceta<T extends receta_subrecetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, receta_subrecetaDefaultArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the detalle_formulacion model
   */
  interface detalle_formulacionFieldRefs {
    readonly id_detalle: FieldRef<"detalle_formulacion", 'Int'>
    readonly id_receta_padre: FieldRef<"detalle_formulacion", 'Int'>
    readonly id_componente_hijo: FieldRef<"detalle_formulacion", 'Int'>
    readonly id_articulo_especifico: FieldRef<"detalle_formulacion", 'Int'>
    readonly cantidad_usada: FieldRef<"detalle_formulacion", 'Decimal'>
    readonly unidad_medida_usada: FieldRef<"detalle_formulacion", 'String'>
    readonly nota_preparacion: FieldRef<"detalle_formulacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * detalle_formulacion findUnique
   */
  export type detalle_formulacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * Filter, which detalle_formulacion to fetch.
     */
    where: detalle_formulacionWhereUniqueInput
  }

  /**
   * detalle_formulacion findUniqueOrThrow
   */
  export type detalle_formulacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * Filter, which detalle_formulacion to fetch.
     */
    where: detalle_formulacionWhereUniqueInput
  }

  /**
   * detalle_formulacion findFirst
   */
  export type detalle_formulacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * Filter, which detalle_formulacion to fetch.
     */
    where?: detalle_formulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_formulacions to fetch.
     */
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_formulacions.
     */
    cursor?: detalle_formulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_formulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_formulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_formulacions.
     */
    distinct?: Detalle_formulacionScalarFieldEnum | Detalle_formulacionScalarFieldEnum[]
  }

  /**
   * detalle_formulacion findFirstOrThrow
   */
  export type detalle_formulacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * Filter, which detalle_formulacion to fetch.
     */
    where?: detalle_formulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_formulacions to fetch.
     */
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_formulacions.
     */
    cursor?: detalle_formulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_formulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_formulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_formulacions.
     */
    distinct?: Detalle_formulacionScalarFieldEnum | Detalle_formulacionScalarFieldEnum[]
  }

  /**
   * detalle_formulacion findMany
   */
  export type detalle_formulacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * Filter, which detalle_formulacions to fetch.
     */
    where?: detalle_formulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_formulacions to fetch.
     */
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_formulacions.
     */
    cursor?: detalle_formulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_formulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_formulacions.
     */
    skip?: number
    distinct?: Detalle_formulacionScalarFieldEnum | Detalle_formulacionScalarFieldEnum[]
  }

  /**
   * detalle_formulacion create
   */
  export type detalle_formulacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_formulacion.
     */
    data: XOR<detalle_formulacionCreateInput, detalle_formulacionUncheckedCreateInput>
  }

  /**
   * detalle_formulacion createMany
   */
  export type detalle_formulacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_formulacions.
     */
    data: detalle_formulacionCreateManyInput | detalle_formulacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_formulacion createManyAndReturn
   */
  export type detalle_formulacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * The data used to create many detalle_formulacions.
     */
    data: detalle_formulacionCreateManyInput | detalle_formulacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalle_formulacion update
   */
  export type detalle_formulacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_formulacion.
     */
    data: XOR<detalle_formulacionUpdateInput, detalle_formulacionUncheckedUpdateInput>
    /**
     * Choose, which detalle_formulacion to update.
     */
    where: detalle_formulacionWhereUniqueInput
  }

  /**
   * detalle_formulacion updateMany
   */
  export type detalle_formulacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_formulacions.
     */
    data: XOR<detalle_formulacionUpdateManyMutationInput, detalle_formulacionUncheckedUpdateManyInput>
    /**
     * Filter which detalle_formulacions to update
     */
    where?: detalle_formulacionWhereInput
    /**
     * Limit how many detalle_formulacions to update.
     */
    limit?: number
  }

  /**
   * detalle_formulacion updateManyAndReturn
   */
  export type detalle_formulacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * The data used to update detalle_formulacions.
     */
    data: XOR<detalle_formulacionUpdateManyMutationInput, detalle_formulacionUncheckedUpdateManyInput>
    /**
     * Filter which detalle_formulacions to update
     */
    where?: detalle_formulacionWhereInput
    /**
     * Limit how many detalle_formulacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalle_formulacion upsert
   */
  export type detalle_formulacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_formulacion to update in case it exists.
     */
    where: detalle_formulacionWhereUniqueInput
    /**
     * In case the detalle_formulacion found by the `where` argument doesn't exist, create a new detalle_formulacion with this data.
     */
    create: XOR<detalle_formulacionCreateInput, detalle_formulacionUncheckedCreateInput>
    /**
     * In case the detalle_formulacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_formulacionUpdateInput, detalle_formulacionUncheckedUpdateInput>
  }

  /**
   * detalle_formulacion delete
   */
  export type detalle_formulacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    /**
     * Filter which detalle_formulacion to delete.
     */
    where: detalle_formulacionWhereUniqueInput
  }

  /**
   * detalle_formulacion deleteMany
   */
  export type detalle_formulacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_formulacions to delete
     */
    where?: detalle_formulacionWhereInput
    /**
     * Limit how many detalle_formulacions to delete.
     */
    limit?: number
  }

  /**
   * detalle_formulacion.articulo_proveedor
   */
  export type detalle_formulacion$articulo_proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    where?: articulo_proveedorWhereInput
  }

  /**
   * detalle_formulacion without action
   */
  export type detalle_formulacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
  }


  /**
   * Model ingrediente_base
   */

  export type AggregateIngrediente_base = {
    _count: Ingrediente_baseCountAggregateOutputType | null
    _avg: Ingrediente_baseAvgAggregateOutputType | null
    _sum: Ingrediente_baseSumAggregateOutputType | null
    _min: Ingrediente_baseMinAggregateOutputType | null
    _max: Ingrediente_baseMaxAggregateOutputType | null
  }

  export type Ingrediente_baseAvgAggregateOutputType = {
    id_componente: number | null
  }

  export type Ingrediente_baseSumAggregateOutputType = {
    id_componente: number | null
  }

  export type Ingrediente_baseMinAggregateOutputType = {
    id_componente: number | null
    aporta_a_base_panadera: boolean | null
  }

  export type Ingrediente_baseMaxAggregateOutputType = {
    id_componente: number | null
    aporta_a_base_panadera: boolean | null
  }

  export type Ingrediente_baseCountAggregateOutputType = {
    id_componente: number
    aporta_a_base_panadera: number
    _all: number
  }


  export type Ingrediente_baseAvgAggregateInputType = {
    id_componente?: true
  }

  export type Ingrediente_baseSumAggregateInputType = {
    id_componente?: true
  }

  export type Ingrediente_baseMinAggregateInputType = {
    id_componente?: true
    aporta_a_base_panadera?: true
  }

  export type Ingrediente_baseMaxAggregateInputType = {
    id_componente?: true
    aporta_a_base_panadera?: true
  }

  export type Ingrediente_baseCountAggregateInputType = {
    id_componente?: true
    aporta_a_base_panadera?: true
    _all?: true
  }

  export type Ingrediente_baseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingrediente_base to aggregate.
     */
    where?: ingrediente_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_bases to fetch.
     */
    orderBy?: ingrediente_baseOrderByWithRelationInput | ingrediente_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingrediente_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingrediente_bases
    **/
    _count?: true | Ingrediente_baseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ingrediente_baseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ingrediente_baseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ingrediente_baseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ingrediente_baseMaxAggregateInputType
  }

  export type GetIngrediente_baseAggregateType<T extends Ingrediente_baseAggregateArgs> = {
        [P in keyof T & keyof AggregateIngrediente_base]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngrediente_base[P]>
      : GetScalarType<T[P], AggregateIngrediente_base[P]>
  }




  export type ingrediente_baseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingrediente_baseWhereInput
    orderBy?: ingrediente_baseOrderByWithAggregationInput | ingrediente_baseOrderByWithAggregationInput[]
    by: Ingrediente_baseScalarFieldEnum[] | Ingrediente_baseScalarFieldEnum
    having?: ingrediente_baseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ingrediente_baseCountAggregateInputType | true
    _avg?: Ingrediente_baseAvgAggregateInputType
    _sum?: Ingrediente_baseSumAggregateInputType
    _min?: Ingrediente_baseMinAggregateInputType
    _max?: Ingrediente_baseMaxAggregateInputType
  }

  export type Ingrediente_baseGroupByOutputType = {
    id_componente: number
    aporta_a_base_panadera: boolean | null
    _count: Ingrediente_baseCountAggregateOutputType | null
    _avg: Ingrediente_baseAvgAggregateOutputType | null
    _sum: Ingrediente_baseSumAggregateOutputType | null
    _min: Ingrediente_baseMinAggregateOutputType | null
    _max: Ingrediente_baseMaxAggregateOutputType | null
  }

  type GetIngrediente_baseGroupByPayload<T extends ingrediente_baseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ingrediente_baseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ingrediente_baseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ingrediente_baseGroupByOutputType[P]>
            : GetScalarType<T[P], Ingrediente_baseGroupByOutputType[P]>
        }
      >
    >


  export type ingrediente_baseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    aporta_a_base_panadera?: boolean
    articulo_proveedor?: boolean | ingrediente_base$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    _count?: boolean | Ingrediente_baseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente_base"]>

  export type ingrediente_baseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    aporta_a_base_panadera?: boolean
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente_base"]>

  export type ingrediente_baseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    aporta_a_base_panadera?: boolean
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente_base"]>

  export type ingrediente_baseSelectScalar = {
    id_componente?: boolean
    aporta_a_base_panadera?: boolean
  }

  export type ingrediente_baseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_componente" | "aporta_a_base_panadera", ExtArgs["result"]["ingrediente_base"]>
  export type ingrediente_baseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | ingrediente_base$articulo_proveedorArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    _count?: boolean | Ingrediente_baseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ingrediente_baseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }
  export type ingrediente_baseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }

  export type $ingrediente_basePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingrediente_base"
    objects: {
      articulo_proveedor: Prisma.$articulo_proveedorPayload<ExtArgs>[]
      catalogo_componente: Prisma.$catalogo_componentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_componente: number
      aporta_a_base_panadera: boolean | null
    }, ExtArgs["result"]["ingrediente_base"]>
    composites: {}
  }

  type ingrediente_baseGetPayload<S extends boolean | null | undefined | ingrediente_baseDefaultArgs> = $Result.GetResult<Prisma.$ingrediente_basePayload, S>

  type ingrediente_baseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingrediente_baseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ingrediente_baseCountAggregateInputType | true
    }

  export interface ingrediente_baseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingrediente_base'], meta: { name: 'ingrediente_base' } }
    /**
     * Find zero or one Ingrediente_base that matches the filter.
     * @param {ingrediente_baseFindUniqueArgs} args - Arguments to find a Ingrediente_base
     * @example
     * // Get one Ingrediente_base
     * const ingrediente_base = await prisma.ingrediente_base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingrediente_baseFindUniqueArgs>(args: SelectSubset<T, ingrediente_baseFindUniqueArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingrediente_base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingrediente_baseFindUniqueOrThrowArgs} args - Arguments to find a Ingrediente_base
     * @example
     * // Get one Ingrediente_base
     * const ingrediente_base = await prisma.ingrediente_base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingrediente_baseFindUniqueOrThrowArgs>(args: SelectSubset<T, ingrediente_baseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente_base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_baseFindFirstArgs} args - Arguments to find a Ingrediente_base
     * @example
     * // Get one Ingrediente_base
     * const ingrediente_base = await prisma.ingrediente_base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingrediente_baseFindFirstArgs>(args?: SelectSubset<T, ingrediente_baseFindFirstArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente_base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_baseFindFirstOrThrowArgs} args - Arguments to find a Ingrediente_base
     * @example
     * // Get one Ingrediente_base
     * const ingrediente_base = await prisma.ingrediente_base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingrediente_baseFindFirstOrThrowArgs>(args?: SelectSubset<T, ingrediente_baseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingrediente_bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_baseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingrediente_bases
     * const ingrediente_bases = await prisma.ingrediente_base.findMany()
     * 
     * // Get first 10 Ingrediente_bases
     * const ingrediente_bases = await prisma.ingrediente_base.findMany({ take: 10 })
     * 
     * // Only select the `id_componente`
     * const ingrediente_baseWithId_componenteOnly = await prisma.ingrediente_base.findMany({ select: { id_componente: true } })
     * 
     */
    findMany<T extends ingrediente_baseFindManyArgs>(args?: SelectSubset<T, ingrediente_baseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingrediente_base.
     * @param {ingrediente_baseCreateArgs} args - Arguments to create a Ingrediente_base.
     * @example
     * // Create one Ingrediente_base
     * const Ingrediente_base = await prisma.ingrediente_base.create({
     *   data: {
     *     // ... data to create a Ingrediente_base
     *   }
     * })
     * 
     */
    create<T extends ingrediente_baseCreateArgs>(args: SelectSubset<T, ingrediente_baseCreateArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingrediente_bases.
     * @param {ingrediente_baseCreateManyArgs} args - Arguments to create many Ingrediente_bases.
     * @example
     * // Create many Ingrediente_bases
     * const ingrediente_base = await prisma.ingrediente_base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingrediente_baseCreateManyArgs>(args?: SelectSubset<T, ingrediente_baseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingrediente_bases and returns the data saved in the database.
     * @param {ingrediente_baseCreateManyAndReturnArgs} args - Arguments to create many Ingrediente_bases.
     * @example
     * // Create many Ingrediente_bases
     * const ingrediente_base = await prisma.ingrediente_base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingrediente_bases and only return the `id_componente`
     * const ingrediente_baseWithId_componenteOnly = await prisma.ingrediente_base.createManyAndReturn({
     *   select: { id_componente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingrediente_baseCreateManyAndReturnArgs>(args?: SelectSubset<T, ingrediente_baseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingrediente_base.
     * @param {ingrediente_baseDeleteArgs} args - Arguments to delete one Ingrediente_base.
     * @example
     * // Delete one Ingrediente_base
     * const Ingrediente_base = await prisma.ingrediente_base.delete({
     *   where: {
     *     // ... filter to delete one Ingrediente_base
     *   }
     * })
     * 
     */
    delete<T extends ingrediente_baseDeleteArgs>(args: SelectSubset<T, ingrediente_baseDeleteArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingrediente_base.
     * @param {ingrediente_baseUpdateArgs} args - Arguments to update one Ingrediente_base.
     * @example
     * // Update one Ingrediente_base
     * const ingrediente_base = await prisma.ingrediente_base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingrediente_baseUpdateArgs>(args: SelectSubset<T, ingrediente_baseUpdateArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingrediente_bases.
     * @param {ingrediente_baseDeleteManyArgs} args - Arguments to filter Ingrediente_bases to delete.
     * @example
     * // Delete a few Ingrediente_bases
     * const { count } = await prisma.ingrediente_base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingrediente_baseDeleteManyArgs>(args?: SelectSubset<T, ingrediente_baseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingrediente_bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_baseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingrediente_bases
     * const ingrediente_base = await prisma.ingrediente_base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingrediente_baseUpdateManyArgs>(args: SelectSubset<T, ingrediente_baseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingrediente_bases and returns the data updated in the database.
     * @param {ingrediente_baseUpdateManyAndReturnArgs} args - Arguments to update many Ingrediente_bases.
     * @example
     * // Update many Ingrediente_bases
     * const ingrediente_base = await prisma.ingrediente_base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingrediente_bases and only return the `id_componente`
     * const ingrediente_baseWithId_componenteOnly = await prisma.ingrediente_base.updateManyAndReturn({
     *   select: { id_componente: true },
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
    updateManyAndReturn<T extends ingrediente_baseUpdateManyAndReturnArgs>(args: SelectSubset<T, ingrediente_baseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingrediente_base.
     * @param {ingrediente_baseUpsertArgs} args - Arguments to update or create a Ingrediente_base.
     * @example
     * // Update or create a Ingrediente_base
     * const ingrediente_base = await prisma.ingrediente_base.upsert({
     *   create: {
     *     // ... data to create a Ingrediente_base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingrediente_base we want to update
     *   }
     * })
     */
    upsert<T extends ingrediente_baseUpsertArgs>(args: SelectSubset<T, ingrediente_baseUpsertArgs<ExtArgs>>): Prisma__ingrediente_baseClient<$Result.GetResult<Prisma.$ingrediente_basePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingrediente_bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_baseCountArgs} args - Arguments to filter Ingrediente_bases to count.
     * @example
     * // Count the number of Ingrediente_bases
     * const count = await prisma.ingrediente_base.count({
     *   where: {
     *     // ... the filter for the Ingrediente_bases we want to count
     *   }
     * })
    **/
    count<T extends ingrediente_baseCountArgs>(
      args?: Subset<T, ingrediente_baseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ingrediente_baseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingrediente_base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ingrediente_baseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ingrediente_baseAggregateArgs>(args: Subset<T, Ingrediente_baseAggregateArgs>): Prisma.PrismaPromise<GetIngrediente_baseAggregateType<T>>

    /**
     * Group by Ingrediente_base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_baseGroupByArgs} args - Group by arguments.
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
      T extends ingrediente_baseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingrediente_baseGroupByArgs['orderBy'] }
        : { orderBy?: ingrediente_baseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingrediente_baseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngrediente_baseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingrediente_base model
   */
  readonly fields: ingrediente_baseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingrediente_base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingrediente_baseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulo_proveedor<T extends ingrediente_base$articulo_proveedorArgs<ExtArgs> = {}>(args?: Subset<T, ingrediente_base$articulo_proveedorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogo_componente<T extends catalogo_componenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componenteDefaultArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ingrediente_base model
   */
  interface ingrediente_baseFieldRefs {
    readonly id_componente: FieldRef<"ingrediente_base", 'Int'>
    readonly aporta_a_base_panadera: FieldRef<"ingrediente_base", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ingrediente_base findUnique
   */
  export type ingrediente_baseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_base to fetch.
     */
    where: ingrediente_baseWhereUniqueInput
  }

  /**
   * ingrediente_base findUniqueOrThrow
   */
  export type ingrediente_baseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_base to fetch.
     */
    where: ingrediente_baseWhereUniqueInput
  }

  /**
   * ingrediente_base findFirst
   */
  export type ingrediente_baseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_base to fetch.
     */
    where?: ingrediente_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_bases to fetch.
     */
    orderBy?: ingrediente_baseOrderByWithRelationInput | ingrediente_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingrediente_bases.
     */
    cursor?: ingrediente_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingrediente_bases.
     */
    distinct?: Ingrediente_baseScalarFieldEnum | Ingrediente_baseScalarFieldEnum[]
  }

  /**
   * ingrediente_base findFirstOrThrow
   */
  export type ingrediente_baseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_base to fetch.
     */
    where?: ingrediente_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_bases to fetch.
     */
    orderBy?: ingrediente_baseOrderByWithRelationInput | ingrediente_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingrediente_bases.
     */
    cursor?: ingrediente_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingrediente_bases.
     */
    distinct?: Ingrediente_baseScalarFieldEnum | Ingrediente_baseScalarFieldEnum[]
  }

  /**
   * ingrediente_base findMany
   */
  export type ingrediente_baseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_bases to fetch.
     */
    where?: ingrediente_baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_bases to fetch.
     */
    orderBy?: ingrediente_baseOrderByWithRelationInput | ingrediente_baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingrediente_bases.
     */
    cursor?: ingrediente_baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_bases.
     */
    skip?: number
    distinct?: Ingrediente_baseScalarFieldEnum | Ingrediente_baseScalarFieldEnum[]
  }

  /**
   * ingrediente_base create
   */
  export type ingrediente_baseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * The data needed to create a ingrediente_base.
     */
    data: XOR<ingrediente_baseCreateInput, ingrediente_baseUncheckedCreateInput>
  }

  /**
   * ingrediente_base createMany
   */
  export type ingrediente_baseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingrediente_bases.
     */
    data: ingrediente_baseCreateManyInput | ingrediente_baseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingrediente_base createManyAndReturn
   */
  export type ingrediente_baseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * The data used to create many ingrediente_bases.
     */
    data: ingrediente_baseCreateManyInput | ingrediente_baseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingrediente_base update
   */
  export type ingrediente_baseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * The data needed to update a ingrediente_base.
     */
    data: XOR<ingrediente_baseUpdateInput, ingrediente_baseUncheckedUpdateInput>
    /**
     * Choose, which ingrediente_base to update.
     */
    where: ingrediente_baseWhereUniqueInput
  }

  /**
   * ingrediente_base updateMany
   */
  export type ingrediente_baseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingrediente_bases.
     */
    data: XOR<ingrediente_baseUpdateManyMutationInput, ingrediente_baseUncheckedUpdateManyInput>
    /**
     * Filter which ingrediente_bases to update
     */
    where?: ingrediente_baseWhereInput
    /**
     * Limit how many ingrediente_bases to update.
     */
    limit?: number
  }

  /**
   * ingrediente_base updateManyAndReturn
   */
  export type ingrediente_baseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * The data used to update ingrediente_bases.
     */
    data: XOR<ingrediente_baseUpdateManyMutationInput, ingrediente_baseUncheckedUpdateManyInput>
    /**
     * Filter which ingrediente_bases to update
     */
    where?: ingrediente_baseWhereInput
    /**
     * Limit how many ingrediente_bases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingrediente_base upsert
   */
  export type ingrediente_baseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * The filter to search for the ingrediente_base to update in case it exists.
     */
    where: ingrediente_baseWhereUniqueInput
    /**
     * In case the ingrediente_base found by the `where` argument doesn't exist, create a new ingrediente_base with this data.
     */
    create: XOR<ingrediente_baseCreateInput, ingrediente_baseUncheckedCreateInput>
    /**
     * In case the ingrediente_base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingrediente_baseUpdateInput, ingrediente_baseUncheckedUpdateInput>
  }

  /**
   * ingrediente_base delete
   */
  export type ingrediente_baseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
    /**
     * Filter which ingrediente_base to delete.
     */
    where: ingrediente_baseWhereUniqueInput
  }

  /**
   * ingrediente_base deleteMany
   */
  export type ingrediente_baseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingrediente_bases to delete
     */
    where?: ingrediente_baseWhereInput
    /**
     * Limit how many ingrediente_bases to delete.
     */
    limit?: number
  }

  /**
   * ingrediente_base.articulo_proveedor
   */
  export type ingrediente_base$articulo_proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    where?: articulo_proveedorWhereInput
    orderBy?: articulo_proveedorOrderByWithRelationInput | articulo_proveedorOrderByWithRelationInput[]
    cursor?: articulo_proveedorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Articulo_proveedorScalarFieldEnum | Articulo_proveedorScalarFieldEnum[]
  }

  /**
   * ingrediente_base without action
   */
  export type ingrediente_baseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_base
     */
    select?: ingrediente_baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_base
     */
    omit?: ingrediente_baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_baseInclude<ExtArgs> | null
  }


  /**
   * Model proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    id_proveedor: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    id_proveedor: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id_proveedor: number | null
    nombre_proveedor: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id_proveedor: number | null
    nombre_proveedor: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type ProveedorCountAggregateOutputType = {
    id_proveedor: number
    nombre_proveedor: number
    telefono: number
    email: number
    direccion: number
    activo: number
    creado_en: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    id_proveedor?: true
  }

  export type ProveedorSumAggregateInputType = {
    id_proveedor?: true
  }

  export type ProveedorMinAggregateInputType = {
    id_proveedor?: true
    nombre_proveedor?: true
    telefono?: true
    email?: true
    direccion?: true
    activo?: true
    creado_en?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id_proveedor?: true
    nombre_proveedor?: true
    telefono?: true
    email?: true
    direccion?: true
    activo?: true
    creado_en?: true
  }

  export type ProveedorCountAggregateInputType = {
    id_proveedor?: true
    nombre_proveedor?: true
    telefono?: true
    email?: true
    direccion?: true
    activo?: true
    creado_en?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proveedor to aggregate.
     */
    where?: proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedors to fetch.
     */
    orderBy?: proveedorOrderByWithRelationInput | proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type proveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proveedorWhereInput
    orderBy?: proveedorOrderByWithAggregationInput | proveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: proveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id_proveedor: number
    nombre_proveedor: string
    telefono: string | null
    email: string | null
    direccion: string | null
    activo: boolean | null
    creado_en: Date | null
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends proveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type proveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proveedor?: boolean
    nombre_proveedor?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    activo?: boolean
    creado_en?: boolean
    articulo_proveedor?: boolean | proveedor$articulo_proveedorArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>

  export type proveedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proveedor?: boolean
    nombre_proveedor?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["proveedor"]>

  export type proveedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proveedor?: boolean
    nombre_proveedor?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["proveedor"]>

  export type proveedorSelectScalar = {
    id_proveedor?: boolean
    nombre_proveedor?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    activo?: boolean
    creado_en?: boolean
  }

  export type proveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proveedor" | "nombre_proveedor" | "telefono" | "email" | "direccion" | "activo" | "creado_en", ExtArgs["result"]["proveedor"]>
  export type proveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_proveedor?: boolean | proveedor$articulo_proveedorArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proveedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type proveedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $proveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proveedor"
    objects: {
      articulo_proveedor: Prisma.$articulo_proveedorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proveedor: number
      nombre_proveedor: string
      telefono: string | null
      email: string | null
      direccion: string | null
      activo: boolean | null
      creado_en: Date | null
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type proveedorGetPayload<S extends boolean | null | undefined | proveedorDefaultArgs> = $Result.GetResult<Prisma.$proveedorPayload, S>

  type proveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface proveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proveedor'], meta: { name: 'proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {proveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proveedorFindUniqueArgs>(args: SelectSubset<T, proveedorFindUniqueArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, proveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proveedorFindFirstArgs>(args?: SelectSubset<T, proveedorFindFirstArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, proveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id_proveedor`
     * const proveedorWithId_proveedorOnly = await prisma.proveedor.findMany({ select: { id_proveedor: true } })
     * 
     */
    findMany<T extends proveedorFindManyArgs>(args?: SelectSubset<T, proveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {proveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends proveedorCreateArgs>(args: SelectSubset<T, proveedorCreateArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {proveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proveedorCreateManyArgs>(args?: SelectSubset<T, proveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proveedors and returns the data saved in the database.
     * @param {proveedorCreateManyAndReturnArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proveedors and only return the `id_proveedor`
     * const proveedorWithId_proveedorOnly = await prisma.proveedor.createManyAndReturn({
     *   select: { id_proveedor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proveedorCreateManyAndReturnArgs>(args?: SelectSubset<T, proveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proveedor.
     * @param {proveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends proveedorDeleteArgs>(args: SelectSubset<T, proveedorDeleteArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {proveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proveedorUpdateArgs>(args: SelectSubset<T, proveedorUpdateArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {proveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proveedorDeleteManyArgs>(args?: SelectSubset<T, proveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proveedorUpdateManyArgs>(args: SelectSubset<T, proveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors and returns the data updated in the database.
     * @param {proveedorUpdateManyAndReturnArgs} args - Arguments to update many Proveedors.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proveedors and only return the `id_proveedor`
     * const proveedorWithId_proveedorOnly = await prisma.proveedor.updateManyAndReturn({
     *   select: { id_proveedor: true },
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
    updateManyAndReturn<T extends proveedorUpdateManyAndReturnArgs>(args: SelectSubset<T, proveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proveedor.
     * @param {proveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends proveedorUpsertArgs>(args: SelectSubset<T, proveedorUpsertArgs<ExtArgs>>): Prisma__proveedorClient<$Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends proveedorCountArgs>(
      args?: Subset<T, proveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorGroupByArgs} args - Group by arguments.
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
      T extends proveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proveedorGroupByArgs['orderBy'] }
        : { orderBy?: proveedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proveedor model
   */
  readonly fields: proveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulo_proveedor<T extends proveedor$articulo_proveedorArgs<ExtArgs> = {}>(args?: Subset<T, proveedor$articulo_proveedorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_proveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the proveedor model
   */
  interface proveedorFieldRefs {
    readonly id_proveedor: FieldRef<"proveedor", 'Int'>
    readonly nombre_proveedor: FieldRef<"proveedor", 'String'>
    readonly telefono: FieldRef<"proveedor", 'String'>
    readonly email: FieldRef<"proveedor", 'String'>
    readonly direccion: FieldRef<"proveedor", 'String'>
    readonly activo: FieldRef<"proveedor", 'Boolean'>
    readonly creado_en: FieldRef<"proveedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * proveedor findUnique
   */
  export type proveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * Filter, which proveedor to fetch.
     */
    where: proveedorWhereUniqueInput
  }

  /**
   * proveedor findUniqueOrThrow
   */
  export type proveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * Filter, which proveedor to fetch.
     */
    where: proveedorWhereUniqueInput
  }

  /**
   * proveedor findFirst
   */
  export type proveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * Filter, which proveedor to fetch.
     */
    where?: proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedors to fetch.
     */
    orderBy?: proveedorOrderByWithRelationInput | proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proveedors.
     */
    cursor?: proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * proveedor findFirstOrThrow
   */
  export type proveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * Filter, which proveedor to fetch.
     */
    where?: proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedors to fetch.
     */
    orderBy?: proveedorOrderByWithRelationInput | proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proveedors.
     */
    cursor?: proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * proveedor findMany
   */
  export type proveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * Filter, which proveedors to fetch.
     */
    where?: proveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedors to fetch.
     */
    orderBy?: proveedorOrderByWithRelationInput | proveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proveedors.
     */
    cursor?: proveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedors.
     */
    skip?: number
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * proveedor create
   */
  export type proveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a proveedor.
     */
    data: XOR<proveedorCreateInput, proveedorUncheckedCreateInput>
  }

  /**
   * proveedor createMany
   */
  export type proveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proveedors.
     */
    data: proveedorCreateManyInput | proveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proveedor createManyAndReturn
   */
  export type proveedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * The data used to create many proveedors.
     */
    data: proveedorCreateManyInput | proveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proveedor update
   */
  export type proveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a proveedor.
     */
    data: XOR<proveedorUpdateInput, proveedorUncheckedUpdateInput>
    /**
     * Choose, which proveedor to update.
     */
    where: proveedorWhereUniqueInput
  }

  /**
   * proveedor updateMany
   */
  export type proveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proveedors.
     */
    data: XOR<proveedorUpdateManyMutationInput, proveedorUncheckedUpdateManyInput>
    /**
     * Filter which proveedors to update
     */
    where?: proveedorWhereInput
    /**
     * Limit how many proveedors to update.
     */
    limit?: number
  }

  /**
   * proveedor updateManyAndReturn
   */
  export type proveedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * The data used to update proveedors.
     */
    data: XOR<proveedorUpdateManyMutationInput, proveedorUncheckedUpdateManyInput>
    /**
     * Filter which proveedors to update
     */
    where?: proveedorWhereInput
    /**
     * Limit how many proveedors to update.
     */
    limit?: number
  }

  /**
   * proveedor upsert
   */
  export type proveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the proveedor to update in case it exists.
     */
    where: proveedorWhereUniqueInput
    /**
     * In case the proveedor found by the `where` argument doesn't exist, create a new proveedor with this data.
     */
    create: XOR<proveedorCreateInput, proveedorUncheckedCreateInput>
    /**
     * In case the proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proveedorUpdateInput, proveedorUncheckedUpdateInput>
  }

  /**
   * proveedor delete
   */
  export type proveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
    /**
     * Filter which proveedor to delete.
     */
    where: proveedorWhereUniqueInput
  }

  /**
   * proveedor deleteMany
   */
  export type proveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proveedors to delete
     */
    where?: proveedorWhereInput
    /**
     * Limit how many proveedors to delete.
     */
    limit?: number
  }

  /**
   * proveedor.articulo_proveedor
   */
  export type proveedor$articulo_proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_proveedor
     */
    select?: articulo_proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_proveedor
     */
    omit?: articulo_proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_proveedorInclude<ExtArgs> | null
    where?: articulo_proveedorWhereInput
    orderBy?: articulo_proveedorOrderByWithRelationInput | articulo_proveedorOrderByWithRelationInput[]
    cursor?: articulo_proveedorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Articulo_proveedorScalarFieldEnum | Articulo_proveedorScalarFieldEnum[]
  }

  /**
   * proveedor without action
   */
  export type proveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: proveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedor
     */
    omit?: proveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedorInclude<ExtArgs> | null
  }


  /**
   * Model receta_subreceta
   */

  export type AggregateReceta_subreceta = {
    _count: Receta_subrecetaCountAggregateOutputType | null
    _avg: Receta_subrecetaAvgAggregateOutputType | null
    _sum: Receta_subrecetaSumAggregateOutputType | null
    _min: Receta_subrecetaMinAggregateOutputType | null
    _max: Receta_subrecetaMaxAggregateOutputType | null
  }

  export type Receta_subrecetaAvgAggregateOutputType = {
    id_componente: number | null
    ppu_objetivo: Decimal | null
    unidades_tanda: number | null
    porcentaje_merma_coccion: Decimal | null
    creado_por: number | null
  }

  export type Receta_subrecetaSumAggregateOutputType = {
    id_componente: number | null
    ppu_objetivo: Decimal | null
    unidades_tanda: number | null
    porcentaje_merma_coccion: Decimal | null
    creado_por: number | null
  }

  export type Receta_subrecetaMinAggregateOutputType = {
    id_componente: number | null
    ppu_objetivo: Decimal | null
    unidades_tanda: number | null
    porcentaje_merma_coccion: Decimal | null
    creado_por: number | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type Receta_subrecetaMaxAggregateOutputType = {
    id_componente: number | null
    ppu_objetivo: Decimal | null
    unidades_tanda: number | null
    porcentaje_merma_coccion: Decimal | null
    creado_por: number | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type Receta_subrecetaCountAggregateOutputType = {
    id_componente: number
    ppu_objetivo: number
    unidades_tanda: number
    porcentaje_merma_coccion: number
    creado_por: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type Receta_subrecetaAvgAggregateInputType = {
    id_componente?: true
    ppu_objetivo?: true
    unidades_tanda?: true
    porcentaje_merma_coccion?: true
    creado_por?: true
  }

  export type Receta_subrecetaSumAggregateInputType = {
    id_componente?: true
    ppu_objetivo?: true
    unidades_tanda?: true
    porcentaje_merma_coccion?: true
    creado_por?: true
  }

  export type Receta_subrecetaMinAggregateInputType = {
    id_componente?: true
    ppu_objetivo?: true
    unidades_tanda?: true
    porcentaje_merma_coccion?: true
    creado_por?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type Receta_subrecetaMaxAggregateInputType = {
    id_componente?: true
    ppu_objetivo?: true
    unidades_tanda?: true
    porcentaje_merma_coccion?: true
    creado_por?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type Receta_subrecetaCountAggregateInputType = {
    id_componente?: true
    ppu_objetivo?: true
    unidades_tanda?: true
    porcentaje_merma_coccion?: true
    creado_por?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type Receta_subrecetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receta_subreceta to aggregate.
     */
    where?: receta_subrecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receta_subrecetas to fetch.
     */
    orderBy?: receta_subrecetaOrderByWithRelationInput | receta_subrecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receta_subrecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receta_subrecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receta_subrecetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receta_subrecetas
    **/
    _count?: true | Receta_subrecetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Receta_subrecetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Receta_subrecetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Receta_subrecetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Receta_subrecetaMaxAggregateInputType
  }

  export type GetReceta_subrecetaAggregateType<T extends Receta_subrecetaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceta_subreceta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceta_subreceta[P]>
      : GetScalarType<T[P], AggregateReceta_subreceta[P]>
  }




  export type receta_subrecetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receta_subrecetaWhereInput
    orderBy?: receta_subrecetaOrderByWithAggregationInput | receta_subrecetaOrderByWithAggregationInput[]
    by: Receta_subrecetaScalarFieldEnum[] | Receta_subrecetaScalarFieldEnum
    having?: receta_subrecetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Receta_subrecetaCountAggregateInputType | true
    _avg?: Receta_subrecetaAvgAggregateInputType
    _sum?: Receta_subrecetaSumAggregateInputType
    _min?: Receta_subrecetaMinAggregateInputType
    _max?: Receta_subrecetaMaxAggregateInputType
  }

  export type Receta_subrecetaGroupByOutputType = {
    id_componente: number
    ppu_objetivo: Decimal | null
    unidades_tanda: number | null
    porcentaje_merma_coccion: Decimal | null
    creado_por: number | null
    creado_en: Date | null
    actualizado_en: Date | null
    _count: Receta_subrecetaCountAggregateOutputType | null
    _avg: Receta_subrecetaAvgAggregateOutputType | null
    _sum: Receta_subrecetaSumAggregateOutputType | null
    _min: Receta_subrecetaMinAggregateOutputType | null
    _max: Receta_subrecetaMaxAggregateOutputType | null
  }

  type GetReceta_subrecetaGroupByPayload<T extends receta_subrecetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Receta_subrecetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Receta_subrecetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Receta_subrecetaGroupByOutputType[P]>
            : GetScalarType<T[P], Receta_subrecetaGroupByOutputType[P]>
        }
      >
    >


  export type receta_subrecetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    ppu_objetivo?: boolean
    unidades_tanda?: boolean
    porcentaje_merma_coccion?: boolean
    creado_por?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    detalle_formulacion?: boolean | receta_subreceta$detalle_formulacionArgs<ExtArgs>
    usuario?: boolean | receta_subreceta$usuarioArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    _count?: boolean | Receta_subrecetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta_subreceta"]>

  export type receta_subrecetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    ppu_objetivo?: boolean
    unidades_tanda?: boolean
    porcentaje_merma_coccion?: boolean
    creado_por?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    usuario?: boolean | receta_subreceta$usuarioArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta_subreceta"]>

  export type receta_subrecetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    ppu_objetivo?: boolean
    unidades_tanda?: boolean
    porcentaje_merma_coccion?: boolean
    creado_por?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    usuario?: boolean | receta_subreceta$usuarioArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta_subreceta"]>

  export type receta_subrecetaSelectScalar = {
    id_componente?: boolean
    ppu_objetivo?: boolean
    unidades_tanda?: boolean
    porcentaje_merma_coccion?: boolean
    creado_por?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type receta_subrecetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_componente" | "ppu_objetivo" | "unidades_tanda" | "porcentaje_merma_coccion" | "creado_por" | "creado_en" | "actualizado_en", ExtArgs["result"]["receta_subreceta"]>
  export type receta_subrecetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_formulacion?: boolean | receta_subreceta$detalle_formulacionArgs<ExtArgs>
    usuario?: boolean | receta_subreceta$usuarioArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
    _count?: boolean | Receta_subrecetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type receta_subrecetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | receta_subreceta$usuarioArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }
  export type receta_subrecetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | receta_subreceta$usuarioArgs<ExtArgs>
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }

  export type $receta_subrecetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receta_subreceta"
    objects: {
      detalle_formulacion: Prisma.$detalle_formulacionPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      catalogo_componente: Prisma.$catalogo_componentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_componente: number
      ppu_objetivo: Prisma.Decimal | null
      unidades_tanda: number | null
      porcentaje_merma_coccion: Prisma.Decimal | null
      creado_por: number | null
      creado_en: Date | null
      actualizado_en: Date | null
    }, ExtArgs["result"]["receta_subreceta"]>
    composites: {}
  }

  type receta_subrecetaGetPayload<S extends boolean | null | undefined | receta_subrecetaDefaultArgs> = $Result.GetResult<Prisma.$receta_subrecetaPayload, S>

  type receta_subrecetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receta_subrecetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Receta_subrecetaCountAggregateInputType | true
    }

  export interface receta_subrecetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receta_subreceta'], meta: { name: 'receta_subreceta' } }
    /**
     * Find zero or one Receta_subreceta that matches the filter.
     * @param {receta_subrecetaFindUniqueArgs} args - Arguments to find a Receta_subreceta
     * @example
     * // Get one Receta_subreceta
     * const receta_subreceta = await prisma.receta_subreceta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receta_subrecetaFindUniqueArgs>(args: SelectSubset<T, receta_subrecetaFindUniqueArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receta_subreceta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receta_subrecetaFindUniqueOrThrowArgs} args - Arguments to find a Receta_subreceta
     * @example
     * // Get one Receta_subreceta
     * const receta_subreceta = await prisma.receta_subreceta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receta_subrecetaFindUniqueOrThrowArgs>(args: SelectSubset<T, receta_subrecetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receta_subreceta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receta_subrecetaFindFirstArgs} args - Arguments to find a Receta_subreceta
     * @example
     * // Get one Receta_subreceta
     * const receta_subreceta = await prisma.receta_subreceta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receta_subrecetaFindFirstArgs>(args?: SelectSubset<T, receta_subrecetaFindFirstArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receta_subreceta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receta_subrecetaFindFirstOrThrowArgs} args - Arguments to find a Receta_subreceta
     * @example
     * // Get one Receta_subreceta
     * const receta_subreceta = await prisma.receta_subreceta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receta_subrecetaFindFirstOrThrowArgs>(args?: SelectSubset<T, receta_subrecetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receta_subrecetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receta_subrecetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receta_subrecetas
     * const receta_subrecetas = await prisma.receta_subreceta.findMany()
     * 
     * // Get first 10 Receta_subrecetas
     * const receta_subrecetas = await prisma.receta_subreceta.findMany({ take: 10 })
     * 
     * // Only select the `id_componente`
     * const receta_subrecetaWithId_componenteOnly = await prisma.receta_subreceta.findMany({ select: { id_componente: true } })
     * 
     */
    findMany<T extends receta_subrecetaFindManyArgs>(args?: SelectSubset<T, receta_subrecetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receta_subreceta.
     * @param {receta_subrecetaCreateArgs} args - Arguments to create a Receta_subreceta.
     * @example
     * // Create one Receta_subreceta
     * const Receta_subreceta = await prisma.receta_subreceta.create({
     *   data: {
     *     // ... data to create a Receta_subreceta
     *   }
     * })
     * 
     */
    create<T extends receta_subrecetaCreateArgs>(args: SelectSubset<T, receta_subrecetaCreateArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receta_subrecetas.
     * @param {receta_subrecetaCreateManyArgs} args - Arguments to create many Receta_subrecetas.
     * @example
     * // Create many Receta_subrecetas
     * const receta_subreceta = await prisma.receta_subreceta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receta_subrecetaCreateManyArgs>(args?: SelectSubset<T, receta_subrecetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receta_subrecetas and returns the data saved in the database.
     * @param {receta_subrecetaCreateManyAndReturnArgs} args - Arguments to create many Receta_subrecetas.
     * @example
     * // Create many Receta_subrecetas
     * const receta_subreceta = await prisma.receta_subreceta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receta_subrecetas and only return the `id_componente`
     * const receta_subrecetaWithId_componenteOnly = await prisma.receta_subreceta.createManyAndReturn({
     *   select: { id_componente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends receta_subrecetaCreateManyAndReturnArgs>(args?: SelectSubset<T, receta_subrecetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receta_subreceta.
     * @param {receta_subrecetaDeleteArgs} args - Arguments to delete one Receta_subreceta.
     * @example
     * // Delete one Receta_subreceta
     * const Receta_subreceta = await prisma.receta_subreceta.delete({
     *   where: {
     *     // ... filter to delete one Receta_subreceta
     *   }
     * })
     * 
     */
    delete<T extends receta_subrecetaDeleteArgs>(args: SelectSubset<T, receta_subrecetaDeleteArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receta_subreceta.
     * @param {receta_subrecetaUpdateArgs} args - Arguments to update one Receta_subreceta.
     * @example
     * // Update one Receta_subreceta
     * const receta_subreceta = await prisma.receta_subreceta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receta_subrecetaUpdateArgs>(args: SelectSubset<T, receta_subrecetaUpdateArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receta_subrecetas.
     * @param {receta_subrecetaDeleteManyArgs} args - Arguments to filter Receta_subrecetas to delete.
     * @example
     * // Delete a few Receta_subrecetas
     * const { count } = await prisma.receta_subreceta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receta_subrecetaDeleteManyArgs>(args?: SelectSubset<T, receta_subrecetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receta_subrecetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receta_subrecetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receta_subrecetas
     * const receta_subreceta = await prisma.receta_subreceta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receta_subrecetaUpdateManyArgs>(args: SelectSubset<T, receta_subrecetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receta_subrecetas and returns the data updated in the database.
     * @param {receta_subrecetaUpdateManyAndReturnArgs} args - Arguments to update many Receta_subrecetas.
     * @example
     * // Update many Receta_subrecetas
     * const receta_subreceta = await prisma.receta_subreceta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receta_subrecetas and only return the `id_componente`
     * const receta_subrecetaWithId_componenteOnly = await prisma.receta_subreceta.updateManyAndReturn({
     *   select: { id_componente: true },
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
    updateManyAndReturn<T extends receta_subrecetaUpdateManyAndReturnArgs>(args: SelectSubset<T, receta_subrecetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receta_subreceta.
     * @param {receta_subrecetaUpsertArgs} args - Arguments to update or create a Receta_subreceta.
     * @example
     * // Update or create a Receta_subreceta
     * const receta_subreceta = await prisma.receta_subreceta.upsert({
     *   create: {
     *     // ... data to create a Receta_subreceta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receta_subreceta we want to update
     *   }
     * })
     */
    upsert<T extends receta_subrecetaUpsertArgs>(args: SelectSubset<T, receta_subrecetaUpsertArgs<ExtArgs>>): Prisma__receta_subrecetaClient<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receta_subrecetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receta_subrecetaCountArgs} args - Arguments to filter Receta_subrecetas to count.
     * @example
     * // Count the number of Receta_subrecetas
     * const count = await prisma.receta_subreceta.count({
     *   where: {
     *     // ... the filter for the Receta_subrecetas we want to count
     *   }
     * })
    **/
    count<T extends receta_subrecetaCountArgs>(
      args?: Subset<T, receta_subrecetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Receta_subrecetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receta_subreceta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Receta_subrecetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Receta_subrecetaAggregateArgs>(args: Subset<T, Receta_subrecetaAggregateArgs>): Prisma.PrismaPromise<GetReceta_subrecetaAggregateType<T>>

    /**
     * Group by Receta_subreceta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receta_subrecetaGroupByArgs} args - Group by arguments.
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
      T extends receta_subrecetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receta_subrecetaGroupByArgs['orderBy'] }
        : { orderBy?: receta_subrecetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, receta_subrecetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceta_subrecetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receta_subreceta model
   */
  readonly fields: receta_subrecetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receta_subreceta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receta_subrecetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_formulacion<T extends receta_subreceta$detalle_formulacionArgs<ExtArgs> = {}>(args?: Subset<T, receta_subreceta$detalle_formulacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_formulacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends receta_subreceta$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, receta_subreceta$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    catalogo_componente<T extends catalogo_componenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componenteDefaultArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the receta_subreceta model
   */
  interface receta_subrecetaFieldRefs {
    readonly id_componente: FieldRef<"receta_subreceta", 'Int'>
    readonly ppu_objetivo: FieldRef<"receta_subreceta", 'Decimal'>
    readonly unidades_tanda: FieldRef<"receta_subreceta", 'Int'>
    readonly porcentaje_merma_coccion: FieldRef<"receta_subreceta", 'Decimal'>
    readonly creado_por: FieldRef<"receta_subreceta", 'Int'>
    readonly creado_en: FieldRef<"receta_subreceta", 'DateTime'>
    readonly actualizado_en: FieldRef<"receta_subreceta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * receta_subreceta findUnique
   */
  export type receta_subrecetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * Filter, which receta_subreceta to fetch.
     */
    where: receta_subrecetaWhereUniqueInput
  }

  /**
   * receta_subreceta findUniqueOrThrow
   */
  export type receta_subrecetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * Filter, which receta_subreceta to fetch.
     */
    where: receta_subrecetaWhereUniqueInput
  }

  /**
   * receta_subreceta findFirst
   */
  export type receta_subrecetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * Filter, which receta_subreceta to fetch.
     */
    where?: receta_subrecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receta_subrecetas to fetch.
     */
    orderBy?: receta_subrecetaOrderByWithRelationInput | receta_subrecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receta_subrecetas.
     */
    cursor?: receta_subrecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receta_subrecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receta_subrecetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receta_subrecetas.
     */
    distinct?: Receta_subrecetaScalarFieldEnum | Receta_subrecetaScalarFieldEnum[]
  }

  /**
   * receta_subreceta findFirstOrThrow
   */
  export type receta_subrecetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * Filter, which receta_subreceta to fetch.
     */
    where?: receta_subrecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receta_subrecetas to fetch.
     */
    orderBy?: receta_subrecetaOrderByWithRelationInput | receta_subrecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receta_subrecetas.
     */
    cursor?: receta_subrecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receta_subrecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receta_subrecetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receta_subrecetas.
     */
    distinct?: Receta_subrecetaScalarFieldEnum | Receta_subrecetaScalarFieldEnum[]
  }

  /**
   * receta_subreceta findMany
   */
  export type receta_subrecetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * Filter, which receta_subrecetas to fetch.
     */
    where?: receta_subrecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receta_subrecetas to fetch.
     */
    orderBy?: receta_subrecetaOrderByWithRelationInput | receta_subrecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receta_subrecetas.
     */
    cursor?: receta_subrecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receta_subrecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receta_subrecetas.
     */
    skip?: number
    distinct?: Receta_subrecetaScalarFieldEnum | Receta_subrecetaScalarFieldEnum[]
  }

  /**
   * receta_subreceta create
   */
  export type receta_subrecetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * The data needed to create a receta_subreceta.
     */
    data: XOR<receta_subrecetaCreateInput, receta_subrecetaUncheckedCreateInput>
  }

  /**
   * receta_subreceta createMany
   */
  export type receta_subrecetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receta_subrecetas.
     */
    data: receta_subrecetaCreateManyInput | receta_subrecetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receta_subreceta createManyAndReturn
   */
  export type receta_subrecetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * The data used to create many receta_subrecetas.
     */
    data: receta_subrecetaCreateManyInput | receta_subrecetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * receta_subreceta update
   */
  export type receta_subrecetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * The data needed to update a receta_subreceta.
     */
    data: XOR<receta_subrecetaUpdateInput, receta_subrecetaUncheckedUpdateInput>
    /**
     * Choose, which receta_subreceta to update.
     */
    where: receta_subrecetaWhereUniqueInput
  }

  /**
   * receta_subreceta updateMany
   */
  export type receta_subrecetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receta_subrecetas.
     */
    data: XOR<receta_subrecetaUpdateManyMutationInput, receta_subrecetaUncheckedUpdateManyInput>
    /**
     * Filter which receta_subrecetas to update
     */
    where?: receta_subrecetaWhereInput
    /**
     * Limit how many receta_subrecetas to update.
     */
    limit?: number
  }

  /**
   * receta_subreceta updateManyAndReturn
   */
  export type receta_subrecetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * The data used to update receta_subrecetas.
     */
    data: XOR<receta_subrecetaUpdateManyMutationInput, receta_subrecetaUncheckedUpdateManyInput>
    /**
     * Filter which receta_subrecetas to update
     */
    where?: receta_subrecetaWhereInput
    /**
     * Limit how many receta_subrecetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * receta_subreceta upsert
   */
  export type receta_subrecetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * The filter to search for the receta_subreceta to update in case it exists.
     */
    where: receta_subrecetaWhereUniqueInput
    /**
     * In case the receta_subreceta found by the `where` argument doesn't exist, create a new receta_subreceta with this data.
     */
    create: XOR<receta_subrecetaCreateInput, receta_subrecetaUncheckedCreateInput>
    /**
     * In case the receta_subreceta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receta_subrecetaUpdateInput, receta_subrecetaUncheckedUpdateInput>
  }

  /**
   * receta_subreceta delete
   */
  export type receta_subrecetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    /**
     * Filter which receta_subreceta to delete.
     */
    where: receta_subrecetaWhereUniqueInput
  }

  /**
   * receta_subreceta deleteMany
   */
  export type receta_subrecetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receta_subrecetas to delete
     */
    where?: receta_subrecetaWhereInput
    /**
     * Limit how many receta_subrecetas to delete.
     */
    limit?: number
  }

  /**
   * receta_subreceta.detalle_formulacion
   */
  export type receta_subreceta$detalle_formulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_formulacion
     */
    select?: detalle_formulacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_formulacion
     */
    omit?: detalle_formulacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_formulacionInclude<ExtArgs> | null
    where?: detalle_formulacionWhereInput
    orderBy?: detalle_formulacionOrderByWithRelationInput | detalle_formulacionOrderByWithRelationInput[]
    cursor?: detalle_formulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_formulacionScalarFieldEnum | Detalle_formulacionScalarFieldEnum[]
  }

  /**
   * receta_subreceta.usuario
   */
  export type receta_subreceta$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * receta_subreceta without action
   */
  export type receta_subrecetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type RolSumAggregateOutputType = {
    id_rol: number | null
  }

  export type RolMinAggregateOutputType = {
    id_rol: number | null
    nombre_rol: string | null
  }

  export type RolMaxAggregateOutputType = {
    id_rol: number | null
    nombre_rol: string | null
  }

  export type RolCountAggregateOutputType = {
    id_rol: number
    nombre_rol: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id_rol?: true
  }

  export type RolSumAggregateInputType = {
    id_rol?: true
  }

  export type RolMinAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
  }

  export type RolMaxAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
  }

  export type RolCountAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id_rol: number
    nombre_rol: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
    usuario?: boolean | rol$usuarioArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectScalar = {
    id_rol?: boolean
    nombre_rol?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre_rol", ExtArgs["result"]["rol"]>
  export type rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | rol$usuarioArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre_rol: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {rolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {rolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id_rol: true },
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
    updateManyAndReturn<T extends rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
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
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends rol$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, rol$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id_rol: FieldRef<"rol", 'Int'>
    readonly nombre_rol: FieldRef<"rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol createManyAndReturn
   */
  export type rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol updateManyAndReturn
   */
  export type rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol.usuario
   */
  export type rol$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
  }


  /**
   * Model servicio_costo
   */

  export type AggregateServicio_costo = {
    _count: Servicio_costoCountAggregateOutputType | null
    _avg: Servicio_costoAvgAggregateOutputType | null
    _sum: Servicio_costoSumAggregateOutputType | null
    _min: Servicio_costoMinAggregateOutputType | null
    _max: Servicio_costoMaxAggregateOutputType | null
  }

  export type Servicio_costoAvgAggregateOutputType = {
    id_componente: number | null
    costo_por_unidad_medida: Decimal | null
  }

  export type Servicio_costoSumAggregateOutputType = {
    id_componente: number | null
    costo_por_unidad_medida: Decimal | null
  }

  export type Servicio_costoMinAggregateOutputType = {
    id_componente: number | null
    costo_por_unidad_medida: Decimal | null
  }

  export type Servicio_costoMaxAggregateOutputType = {
    id_componente: number | null
    costo_por_unidad_medida: Decimal | null
  }

  export type Servicio_costoCountAggregateOutputType = {
    id_componente: number
    costo_por_unidad_medida: number
    _all: number
  }


  export type Servicio_costoAvgAggregateInputType = {
    id_componente?: true
    costo_por_unidad_medida?: true
  }

  export type Servicio_costoSumAggregateInputType = {
    id_componente?: true
    costo_por_unidad_medida?: true
  }

  export type Servicio_costoMinAggregateInputType = {
    id_componente?: true
    costo_por_unidad_medida?: true
  }

  export type Servicio_costoMaxAggregateInputType = {
    id_componente?: true
    costo_por_unidad_medida?: true
  }

  export type Servicio_costoCountAggregateInputType = {
    id_componente?: true
    costo_por_unidad_medida?: true
    _all?: true
  }

  export type Servicio_costoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio_costo to aggregate.
     */
    where?: servicio_costoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_costos to fetch.
     */
    orderBy?: servicio_costoOrderByWithRelationInput | servicio_costoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicio_costoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_costos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_costos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicio_costos
    **/
    _count?: true | Servicio_costoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Servicio_costoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Servicio_costoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Servicio_costoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Servicio_costoMaxAggregateInputType
  }

  export type GetServicio_costoAggregateType<T extends Servicio_costoAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio_costo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio_costo[P]>
      : GetScalarType<T[P], AggregateServicio_costo[P]>
  }




  export type servicio_costoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicio_costoWhereInput
    orderBy?: servicio_costoOrderByWithAggregationInput | servicio_costoOrderByWithAggregationInput[]
    by: Servicio_costoScalarFieldEnum[] | Servicio_costoScalarFieldEnum
    having?: servicio_costoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Servicio_costoCountAggregateInputType | true
    _avg?: Servicio_costoAvgAggregateInputType
    _sum?: Servicio_costoSumAggregateInputType
    _min?: Servicio_costoMinAggregateInputType
    _max?: Servicio_costoMaxAggregateInputType
  }

  export type Servicio_costoGroupByOutputType = {
    id_componente: number
    costo_por_unidad_medida: Decimal
    _count: Servicio_costoCountAggregateOutputType | null
    _avg: Servicio_costoAvgAggregateOutputType | null
    _sum: Servicio_costoSumAggregateOutputType | null
    _min: Servicio_costoMinAggregateOutputType | null
    _max: Servicio_costoMaxAggregateOutputType | null
  }

  type GetServicio_costoGroupByPayload<T extends servicio_costoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Servicio_costoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Servicio_costoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Servicio_costoGroupByOutputType[P]>
            : GetScalarType<T[P], Servicio_costoGroupByOutputType[P]>
        }
      >
    >


  export type servicio_costoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    costo_por_unidad_medida?: boolean
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio_costo"]>

  export type servicio_costoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    costo_por_unidad_medida?: boolean
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio_costo"]>

  export type servicio_costoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_componente?: boolean
    costo_por_unidad_medida?: boolean
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio_costo"]>

  export type servicio_costoSelectScalar = {
    id_componente?: boolean
    costo_por_unidad_medida?: boolean
  }

  export type servicio_costoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_componente" | "costo_por_unidad_medida", ExtArgs["result"]["servicio_costo"]>
  export type servicio_costoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }
  export type servicio_costoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }
  export type servicio_costoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogo_componente?: boolean | catalogo_componenteDefaultArgs<ExtArgs>
  }

  export type $servicio_costoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicio_costo"
    objects: {
      catalogo_componente: Prisma.$catalogo_componentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_componente: number
      costo_por_unidad_medida: Prisma.Decimal
    }, ExtArgs["result"]["servicio_costo"]>
    composites: {}
  }

  type servicio_costoGetPayload<S extends boolean | null | undefined | servicio_costoDefaultArgs> = $Result.GetResult<Prisma.$servicio_costoPayload, S>

  type servicio_costoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicio_costoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Servicio_costoCountAggregateInputType | true
    }

  export interface servicio_costoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicio_costo'], meta: { name: 'servicio_costo' } }
    /**
     * Find zero or one Servicio_costo that matches the filter.
     * @param {servicio_costoFindUniqueArgs} args - Arguments to find a Servicio_costo
     * @example
     * // Get one Servicio_costo
     * const servicio_costo = await prisma.servicio_costo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicio_costoFindUniqueArgs>(args: SelectSubset<T, servicio_costoFindUniqueArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio_costo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicio_costoFindUniqueOrThrowArgs} args - Arguments to find a Servicio_costo
     * @example
     * // Get one Servicio_costo
     * const servicio_costo = await prisma.servicio_costo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicio_costoFindUniqueOrThrowArgs>(args: SelectSubset<T, servicio_costoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio_costo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_costoFindFirstArgs} args - Arguments to find a Servicio_costo
     * @example
     * // Get one Servicio_costo
     * const servicio_costo = await prisma.servicio_costo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicio_costoFindFirstArgs>(args?: SelectSubset<T, servicio_costoFindFirstArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio_costo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_costoFindFirstOrThrowArgs} args - Arguments to find a Servicio_costo
     * @example
     * // Get one Servicio_costo
     * const servicio_costo = await prisma.servicio_costo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicio_costoFindFirstOrThrowArgs>(args?: SelectSubset<T, servicio_costoFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicio_costos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_costoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicio_costos
     * const servicio_costos = await prisma.servicio_costo.findMany()
     * 
     * // Get first 10 Servicio_costos
     * const servicio_costos = await prisma.servicio_costo.findMany({ take: 10 })
     * 
     * // Only select the `id_componente`
     * const servicio_costoWithId_componenteOnly = await prisma.servicio_costo.findMany({ select: { id_componente: true } })
     * 
     */
    findMany<T extends servicio_costoFindManyArgs>(args?: SelectSubset<T, servicio_costoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio_costo.
     * @param {servicio_costoCreateArgs} args - Arguments to create a Servicio_costo.
     * @example
     * // Create one Servicio_costo
     * const Servicio_costo = await prisma.servicio_costo.create({
     *   data: {
     *     // ... data to create a Servicio_costo
     *   }
     * })
     * 
     */
    create<T extends servicio_costoCreateArgs>(args: SelectSubset<T, servicio_costoCreateArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicio_costos.
     * @param {servicio_costoCreateManyArgs} args - Arguments to create many Servicio_costos.
     * @example
     * // Create many Servicio_costos
     * const servicio_costo = await prisma.servicio_costo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicio_costoCreateManyArgs>(args?: SelectSubset<T, servicio_costoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicio_costos and returns the data saved in the database.
     * @param {servicio_costoCreateManyAndReturnArgs} args - Arguments to create many Servicio_costos.
     * @example
     * // Create many Servicio_costos
     * const servicio_costo = await prisma.servicio_costo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicio_costos and only return the `id_componente`
     * const servicio_costoWithId_componenteOnly = await prisma.servicio_costo.createManyAndReturn({
     *   select: { id_componente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicio_costoCreateManyAndReturnArgs>(args?: SelectSubset<T, servicio_costoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio_costo.
     * @param {servicio_costoDeleteArgs} args - Arguments to delete one Servicio_costo.
     * @example
     * // Delete one Servicio_costo
     * const Servicio_costo = await prisma.servicio_costo.delete({
     *   where: {
     *     // ... filter to delete one Servicio_costo
     *   }
     * })
     * 
     */
    delete<T extends servicio_costoDeleteArgs>(args: SelectSubset<T, servicio_costoDeleteArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio_costo.
     * @param {servicio_costoUpdateArgs} args - Arguments to update one Servicio_costo.
     * @example
     * // Update one Servicio_costo
     * const servicio_costo = await prisma.servicio_costo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicio_costoUpdateArgs>(args: SelectSubset<T, servicio_costoUpdateArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicio_costos.
     * @param {servicio_costoDeleteManyArgs} args - Arguments to filter Servicio_costos to delete.
     * @example
     * // Delete a few Servicio_costos
     * const { count } = await prisma.servicio_costo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicio_costoDeleteManyArgs>(args?: SelectSubset<T, servicio_costoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicio_costos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_costoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicio_costos
     * const servicio_costo = await prisma.servicio_costo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicio_costoUpdateManyArgs>(args: SelectSubset<T, servicio_costoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicio_costos and returns the data updated in the database.
     * @param {servicio_costoUpdateManyAndReturnArgs} args - Arguments to update many Servicio_costos.
     * @example
     * // Update many Servicio_costos
     * const servicio_costo = await prisma.servicio_costo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicio_costos and only return the `id_componente`
     * const servicio_costoWithId_componenteOnly = await prisma.servicio_costo.updateManyAndReturn({
     *   select: { id_componente: true },
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
    updateManyAndReturn<T extends servicio_costoUpdateManyAndReturnArgs>(args: SelectSubset<T, servicio_costoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio_costo.
     * @param {servicio_costoUpsertArgs} args - Arguments to update or create a Servicio_costo.
     * @example
     * // Update or create a Servicio_costo
     * const servicio_costo = await prisma.servicio_costo.upsert({
     *   create: {
     *     // ... data to create a Servicio_costo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio_costo we want to update
     *   }
     * })
     */
    upsert<T extends servicio_costoUpsertArgs>(args: SelectSubset<T, servicio_costoUpsertArgs<ExtArgs>>): Prisma__servicio_costoClient<$Result.GetResult<Prisma.$servicio_costoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicio_costos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_costoCountArgs} args - Arguments to filter Servicio_costos to count.
     * @example
     * // Count the number of Servicio_costos
     * const count = await prisma.servicio_costo.count({
     *   where: {
     *     // ... the filter for the Servicio_costos we want to count
     *   }
     * })
    **/
    count<T extends servicio_costoCountArgs>(
      args?: Subset<T, servicio_costoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Servicio_costoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio_costo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Servicio_costoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Servicio_costoAggregateArgs>(args: Subset<T, Servicio_costoAggregateArgs>): Prisma.PrismaPromise<GetServicio_costoAggregateType<T>>

    /**
     * Group by Servicio_costo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_costoGroupByArgs} args - Group by arguments.
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
      T extends servicio_costoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicio_costoGroupByArgs['orderBy'] }
        : { orderBy?: servicio_costoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicio_costoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicio_costoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicio_costo model
   */
  readonly fields: servicio_costoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicio_costo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicio_costoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    catalogo_componente<T extends catalogo_componenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, catalogo_componenteDefaultArgs<ExtArgs>>): Prisma__catalogo_componenteClient<$Result.GetResult<Prisma.$catalogo_componentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the servicio_costo model
   */
  interface servicio_costoFieldRefs {
    readonly id_componente: FieldRef<"servicio_costo", 'Int'>
    readonly costo_por_unidad_medida: FieldRef<"servicio_costo", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * servicio_costo findUnique
   */
  export type servicio_costoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * Filter, which servicio_costo to fetch.
     */
    where: servicio_costoWhereUniqueInput
  }

  /**
   * servicio_costo findUniqueOrThrow
   */
  export type servicio_costoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * Filter, which servicio_costo to fetch.
     */
    where: servicio_costoWhereUniqueInput
  }

  /**
   * servicio_costo findFirst
   */
  export type servicio_costoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * Filter, which servicio_costo to fetch.
     */
    where?: servicio_costoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_costos to fetch.
     */
    orderBy?: servicio_costoOrderByWithRelationInput | servicio_costoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicio_costos.
     */
    cursor?: servicio_costoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_costos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_costos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicio_costos.
     */
    distinct?: Servicio_costoScalarFieldEnum | Servicio_costoScalarFieldEnum[]
  }

  /**
   * servicio_costo findFirstOrThrow
   */
  export type servicio_costoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * Filter, which servicio_costo to fetch.
     */
    where?: servicio_costoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_costos to fetch.
     */
    orderBy?: servicio_costoOrderByWithRelationInput | servicio_costoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicio_costos.
     */
    cursor?: servicio_costoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_costos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_costos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicio_costos.
     */
    distinct?: Servicio_costoScalarFieldEnum | Servicio_costoScalarFieldEnum[]
  }

  /**
   * servicio_costo findMany
   */
  export type servicio_costoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * Filter, which servicio_costos to fetch.
     */
    where?: servicio_costoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_costos to fetch.
     */
    orderBy?: servicio_costoOrderByWithRelationInput | servicio_costoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicio_costos.
     */
    cursor?: servicio_costoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_costos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_costos.
     */
    skip?: number
    distinct?: Servicio_costoScalarFieldEnum | Servicio_costoScalarFieldEnum[]
  }

  /**
   * servicio_costo create
   */
  export type servicio_costoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * The data needed to create a servicio_costo.
     */
    data: XOR<servicio_costoCreateInput, servicio_costoUncheckedCreateInput>
  }

  /**
   * servicio_costo createMany
   */
  export type servicio_costoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicio_costos.
     */
    data: servicio_costoCreateManyInput | servicio_costoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicio_costo createManyAndReturn
   */
  export type servicio_costoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * The data used to create many servicio_costos.
     */
    data: servicio_costoCreateManyInput | servicio_costoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * servicio_costo update
   */
  export type servicio_costoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * The data needed to update a servicio_costo.
     */
    data: XOR<servicio_costoUpdateInput, servicio_costoUncheckedUpdateInput>
    /**
     * Choose, which servicio_costo to update.
     */
    where: servicio_costoWhereUniqueInput
  }

  /**
   * servicio_costo updateMany
   */
  export type servicio_costoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicio_costos.
     */
    data: XOR<servicio_costoUpdateManyMutationInput, servicio_costoUncheckedUpdateManyInput>
    /**
     * Filter which servicio_costos to update
     */
    where?: servicio_costoWhereInput
    /**
     * Limit how many servicio_costos to update.
     */
    limit?: number
  }

  /**
   * servicio_costo updateManyAndReturn
   */
  export type servicio_costoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * The data used to update servicio_costos.
     */
    data: XOR<servicio_costoUpdateManyMutationInput, servicio_costoUncheckedUpdateManyInput>
    /**
     * Filter which servicio_costos to update
     */
    where?: servicio_costoWhereInput
    /**
     * Limit how many servicio_costos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * servicio_costo upsert
   */
  export type servicio_costoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * The filter to search for the servicio_costo to update in case it exists.
     */
    where: servicio_costoWhereUniqueInput
    /**
     * In case the servicio_costo found by the `where` argument doesn't exist, create a new servicio_costo with this data.
     */
    create: XOR<servicio_costoCreateInput, servicio_costoUncheckedCreateInput>
    /**
     * In case the servicio_costo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicio_costoUpdateInput, servicio_costoUncheckedUpdateInput>
  }

  /**
   * servicio_costo delete
   */
  export type servicio_costoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
    /**
     * Filter which servicio_costo to delete.
     */
    where: servicio_costoWhereUniqueInput
  }

  /**
   * servicio_costo deleteMany
   */
  export type servicio_costoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio_costos to delete
     */
    where?: servicio_costoWhereInput
    /**
     * Limit how many servicio_costos to delete.
     */
    limit?: number
  }

  /**
   * servicio_costo without action
   */
  export type servicio_costoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_costo
     */
    select?: servicio_costoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio_costo
     */
    omit?: servicio_costoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_costoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    apellido_usuario: string | null
    email: string | null
    id_rol: number | null
    activo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    apellido_usuario: string | null
    email: string | null
    id_rol: number | null
    activo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre_usuario: number
    apellido_usuario: number
    email: number
    id_rol: number
    activo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    apellido_usuario?: true
    email?: true
    id_rol?: true
    activo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    apellido_usuario?: true
    email?: true
    id_rol?: true
    activo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    apellido_usuario?: true
    email?: true
    id_rol?: true
    activo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre_usuario: string
    apellido_usuario: string | null
    email: string | null
    id_rol: number
    activo: boolean | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    apellido_usuario?: boolean
    email?: boolean
    id_rol?: boolean
    activo?: boolean
    receta_subreceta?: boolean | usuario$receta_subrecetaArgs<ExtArgs>
    rol?: boolean | rolDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    apellido_usuario?: boolean
    email?: boolean
    id_rol?: boolean
    activo?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    apellido_usuario?: boolean
    email?: boolean
    id_rol?: boolean
    activo?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre_usuario?: boolean
    apellido_usuario?: boolean
    email?: boolean
    id_rol?: boolean
    activo?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre_usuario" | "apellido_usuario" | "email" | "id_rol" | "activo", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta_subreceta?: boolean | usuario$receta_subrecetaArgs<ExtArgs>
    rol?: boolean | rolDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      receta_subreceta: Prisma.$receta_subrecetaPayload<ExtArgs>[]
      rol: Prisma.$rolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre_usuario: string
      apellido_usuario: string | null
      email: string | null
      id_rol: number
      activo: boolean | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receta_subreceta<T extends usuario$receta_subrecetaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$receta_subrecetaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receta_subrecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rol<T extends rolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolDefaultArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly nombre_usuario: FieldRef<"usuario", 'String'>
    readonly apellido_usuario: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly id_rol: FieldRef<"usuario", 'Int'>
    readonly activo: FieldRef<"usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.receta_subreceta
   */
  export type usuario$receta_subrecetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receta_subreceta
     */
    select?: receta_subrecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receta_subreceta
     */
    omit?: receta_subrecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receta_subrecetaInclude<ExtArgs> | null
    where?: receta_subrecetaWhereInput
    orderBy?: receta_subrecetaOrderByWithRelationInput | receta_subrecetaOrderByWithRelationInput[]
    cursor?: receta_subrecetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Receta_subrecetaScalarFieldEnum | Receta_subrecetaScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
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


  export const Articulo_proveedorScalarFieldEnum: {
    id_articulo: 'id_articulo',
    id_componente: 'id_componente',
    id_proveedor: 'id_proveedor',
    marca_descripcion: 'marca_descripcion',
    costo_por_unidad: 'costo_por_unidad',
    porcentaje_agua: 'porcentaje_agua',
    porcentaje_grasa: 'porcentaje_grasa',
    porcentaje_merma_limpieza: 'porcentaje_merma_limpieza',
    es_predeterminado: 'es_predeterminado',
    creado_en: 'creado_en'
  };

  export type Articulo_proveedorScalarFieldEnum = (typeof Articulo_proveedorScalarFieldEnum)[keyof typeof Articulo_proveedorScalarFieldEnum]


  export const Catalogo_componenteScalarFieldEnum: {
    id_componente: 'id_componente',
    nombre: 'nombre',
    tipo_componente: 'tipo_componente',
    unidad_medida: 'unidad_medida',
    activo: 'activo'
  };

  export type Catalogo_componenteScalarFieldEnum = (typeof Catalogo_componenteScalarFieldEnum)[keyof typeof Catalogo_componenteScalarFieldEnum]


  export const Detalle_formulacionScalarFieldEnum: {
    id_detalle: 'id_detalle',
    id_receta_padre: 'id_receta_padre',
    id_componente_hijo: 'id_componente_hijo',
    id_articulo_especifico: 'id_articulo_especifico',
    cantidad_usada: 'cantidad_usada',
    unidad_medida_usada: 'unidad_medida_usada',
    nota_preparacion: 'nota_preparacion'
  };

  export type Detalle_formulacionScalarFieldEnum = (typeof Detalle_formulacionScalarFieldEnum)[keyof typeof Detalle_formulacionScalarFieldEnum]


  export const Ingrediente_baseScalarFieldEnum: {
    id_componente: 'id_componente',
    aporta_a_base_panadera: 'aporta_a_base_panadera'
  };

  export type Ingrediente_baseScalarFieldEnum = (typeof Ingrediente_baseScalarFieldEnum)[keyof typeof Ingrediente_baseScalarFieldEnum]


  export const ProveedorScalarFieldEnum: {
    id_proveedor: 'id_proveedor',
    nombre_proveedor: 'nombre_proveedor',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion',
    activo: 'activo',
    creado_en: 'creado_en'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const Receta_subrecetaScalarFieldEnum: {
    id_componente: 'id_componente',
    ppu_objetivo: 'ppu_objetivo',
    unidades_tanda: 'unidades_tanda',
    porcentaje_merma_coccion: 'porcentaje_merma_coccion',
    creado_por: 'creado_por',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type Receta_subrecetaScalarFieldEnum = (typeof Receta_subrecetaScalarFieldEnum)[keyof typeof Receta_subrecetaScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre_rol: 'nombre_rol'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const Servicio_costoScalarFieldEnum: {
    id_componente: 'id_componente',
    costo_por_unidad_medida: 'costo_por_unidad_medida'
  };

  export type Servicio_costoScalarFieldEnum = (typeof Servicio_costoScalarFieldEnum)[keyof typeof Servicio_costoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_usuario: 'nombre_usuario',
    apellido_usuario: 'apellido_usuario',
    email: 'email',
    id_rol: 'id_rol',
    activo: 'activo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type articulo_proveedorWhereInput = {
    AND?: articulo_proveedorWhereInput | articulo_proveedorWhereInput[]
    OR?: articulo_proveedorWhereInput[]
    NOT?: articulo_proveedorWhereInput | articulo_proveedorWhereInput[]
    id_articulo?: IntFilter<"articulo_proveedor"> | number
    id_componente?: IntFilter<"articulo_proveedor"> | number
    id_proveedor?: IntFilter<"articulo_proveedor"> | number
    marca_descripcion?: StringNullableFilter<"articulo_proveedor"> | string | null
    costo_por_unidad?: DecimalFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: BoolNullableFilter<"articulo_proveedor"> | boolean | null
    creado_en?: DateTimeNullableFilter<"articulo_proveedor"> | Date | string | null
    ingrediente_base?: XOR<Ingrediente_baseScalarRelationFilter, ingrediente_baseWhereInput>
    proveedor?: XOR<ProveedorScalarRelationFilter, proveedorWhereInput>
    detalle_formulacion?: Detalle_formulacionListRelationFilter
  }

  export type articulo_proveedorOrderByWithRelationInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    marca_descripcion?: SortOrderInput | SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrderInput | SortOrder
    porcentaje_grasa?: SortOrderInput | SortOrder
    porcentaje_merma_limpieza?: SortOrderInput | SortOrder
    es_predeterminado?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    ingrediente_base?: ingrediente_baseOrderByWithRelationInput
    proveedor?: proveedorOrderByWithRelationInput
    detalle_formulacion?: detalle_formulacionOrderByRelationAggregateInput
  }

  export type articulo_proveedorWhereUniqueInput = Prisma.AtLeast<{
    id_articulo?: number
    id_componente_id_proveedor?: articulo_proveedorId_componenteId_proveedorCompoundUniqueInput
    AND?: articulo_proveedorWhereInput | articulo_proveedorWhereInput[]
    OR?: articulo_proveedorWhereInput[]
    NOT?: articulo_proveedorWhereInput | articulo_proveedorWhereInput[]
    id_componente?: IntFilter<"articulo_proveedor"> | number
    id_proveedor?: IntFilter<"articulo_proveedor"> | number
    marca_descripcion?: StringNullableFilter<"articulo_proveedor"> | string | null
    costo_por_unidad?: DecimalFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: BoolNullableFilter<"articulo_proveedor"> | boolean | null
    creado_en?: DateTimeNullableFilter<"articulo_proveedor"> | Date | string | null
    ingrediente_base?: XOR<Ingrediente_baseScalarRelationFilter, ingrediente_baseWhereInput>
    proveedor?: XOR<ProveedorScalarRelationFilter, proveedorWhereInput>
    detalle_formulacion?: Detalle_formulacionListRelationFilter
  }, "id_articulo" | "id_componente_id_proveedor">

  export type articulo_proveedorOrderByWithAggregationInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    marca_descripcion?: SortOrderInput | SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrderInput | SortOrder
    porcentaje_grasa?: SortOrderInput | SortOrder
    porcentaje_merma_limpieza?: SortOrderInput | SortOrder
    es_predeterminado?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: articulo_proveedorCountOrderByAggregateInput
    _avg?: articulo_proveedorAvgOrderByAggregateInput
    _max?: articulo_proveedorMaxOrderByAggregateInput
    _min?: articulo_proveedorMinOrderByAggregateInput
    _sum?: articulo_proveedorSumOrderByAggregateInput
  }

  export type articulo_proveedorScalarWhereWithAggregatesInput = {
    AND?: articulo_proveedorScalarWhereWithAggregatesInput | articulo_proveedorScalarWhereWithAggregatesInput[]
    OR?: articulo_proveedorScalarWhereWithAggregatesInput[]
    NOT?: articulo_proveedorScalarWhereWithAggregatesInput | articulo_proveedorScalarWhereWithAggregatesInput[]
    id_articulo?: IntWithAggregatesFilter<"articulo_proveedor"> | number
    id_componente?: IntWithAggregatesFilter<"articulo_proveedor"> | number
    id_proveedor?: IntWithAggregatesFilter<"articulo_proveedor"> | number
    marca_descripcion?: StringNullableWithAggregatesFilter<"articulo_proveedor"> | string | null
    costo_por_unidad?: DecimalWithAggregatesFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: DecimalNullableWithAggregatesFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: DecimalNullableWithAggregatesFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: DecimalNullableWithAggregatesFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: BoolNullableWithAggregatesFilter<"articulo_proveedor"> | boolean | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"articulo_proveedor"> | Date | string | null
  }

  export type catalogo_componenteWhereInput = {
    AND?: catalogo_componenteWhereInput | catalogo_componenteWhereInput[]
    OR?: catalogo_componenteWhereInput[]
    NOT?: catalogo_componenteWhereInput | catalogo_componenteWhereInput[]
    id_componente?: IntFilter<"catalogo_componente"> | number
    nombre?: StringFilter<"catalogo_componente"> | string
    tipo_componente?: StringFilter<"catalogo_componente"> | string
    unidad_medida?: StringFilter<"catalogo_componente"> | string
    activo?: BoolNullableFilter<"catalogo_componente"> | boolean | null
    detalle_formulacion?: Detalle_formulacionListRelationFilter
    ingrediente_base?: XOR<Ingrediente_baseNullableScalarRelationFilter, ingrediente_baseWhereInput> | null
    receta_subreceta?: XOR<Receta_subrecetaNullableScalarRelationFilter, receta_subrecetaWhereInput> | null
    servicio_costo?: XOR<Servicio_costoNullableScalarRelationFilter, servicio_costoWhereInput> | null
  }

  export type catalogo_componenteOrderByWithRelationInput = {
    id_componente?: SortOrder
    nombre?: SortOrder
    tipo_componente?: SortOrder
    unidad_medida?: SortOrder
    activo?: SortOrderInput | SortOrder
    detalle_formulacion?: detalle_formulacionOrderByRelationAggregateInput
    ingrediente_base?: ingrediente_baseOrderByWithRelationInput
    receta_subreceta?: receta_subrecetaOrderByWithRelationInput
    servicio_costo?: servicio_costoOrderByWithRelationInput
  }

  export type catalogo_componenteWhereUniqueInput = Prisma.AtLeast<{
    id_componente?: number
    AND?: catalogo_componenteWhereInput | catalogo_componenteWhereInput[]
    OR?: catalogo_componenteWhereInput[]
    NOT?: catalogo_componenteWhereInput | catalogo_componenteWhereInput[]
    nombre?: StringFilter<"catalogo_componente"> | string
    tipo_componente?: StringFilter<"catalogo_componente"> | string
    unidad_medida?: StringFilter<"catalogo_componente"> | string
    activo?: BoolNullableFilter<"catalogo_componente"> | boolean | null
    detalle_formulacion?: Detalle_formulacionListRelationFilter
    ingrediente_base?: XOR<Ingrediente_baseNullableScalarRelationFilter, ingrediente_baseWhereInput> | null
    receta_subreceta?: XOR<Receta_subrecetaNullableScalarRelationFilter, receta_subrecetaWhereInput> | null
    servicio_costo?: XOR<Servicio_costoNullableScalarRelationFilter, servicio_costoWhereInput> | null
  }, "id_componente">

  export type catalogo_componenteOrderByWithAggregationInput = {
    id_componente?: SortOrder
    nombre?: SortOrder
    tipo_componente?: SortOrder
    unidad_medida?: SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: catalogo_componenteCountOrderByAggregateInput
    _avg?: catalogo_componenteAvgOrderByAggregateInput
    _max?: catalogo_componenteMaxOrderByAggregateInput
    _min?: catalogo_componenteMinOrderByAggregateInput
    _sum?: catalogo_componenteSumOrderByAggregateInput
  }

  export type catalogo_componenteScalarWhereWithAggregatesInput = {
    AND?: catalogo_componenteScalarWhereWithAggregatesInput | catalogo_componenteScalarWhereWithAggregatesInput[]
    OR?: catalogo_componenteScalarWhereWithAggregatesInput[]
    NOT?: catalogo_componenteScalarWhereWithAggregatesInput | catalogo_componenteScalarWhereWithAggregatesInput[]
    id_componente?: IntWithAggregatesFilter<"catalogo_componente"> | number
    nombre?: StringWithAggregatesFilter<"catalogo_componente"> | string
    tipo_componente?: StringWithAggregatesFilter<"catalogo_componente"> | string
    unidad_medida?: StringWithAggregatesFilter<"catalogo_componente"> | string
    activo?: BoolNullableWithAggregatesFilter<"catalogo_componente"> | boolean | null
  }

  export type detalle_formulacionWhereInput = {
    AND?: detalle_formulacionWhereInput | detalle_formulacionWhereInput[]
    OR?: detalle_formulacionWhereInput[]
    NOT?: detalle_formulacionWhereInput | detalle_formulacionWhereInput[]
    id_detalle?: IntFilter<"detalle_formulacion"> | number
    id_receta_padre?: IntFilter<"detalle_formulacion"> | number
    id_componente_hijo?: IntFilter<"detalle_formulacion"> | number
    id_articulo_especifico?: IntNullableFilter<"detalle_formulacion"> | number | null
    cantidad_usada?: DecimalFilter<"detalle_formulacion"> | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFilter<"detalle_formulacion"> | string
    nota_preparacion?: StringNullableFilter<"detalle_formulacion"> | string | null
    articulo_proveedor?: XOR<Articulo_proveedorNullableScalarRelationFilter, articulo_proveedorWhereInput> | null
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
    receta_subreceta?: XOR<Receta_subrecetaScalarRelationFilter, receta_subrecetaWhereInput>
  }

  export type detalle_formulacionOrderByWithRelationInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrderInput | SortOrder
    cantidad_usada?: SortOrder
    unidad_medida_usada?: SortOrder
    nota_preparacion?: SortOrderInput | SortOrder
    articulo_proveedor?: articulo_proveedorOrderByWithRelationInput
    catalogo_componente?: catalogo_componenteOrderByWithRelationInput
    receta_subreceta?: receta_subrecetaOrderByWithRelationInput
  }

  export type detalle_formulacionWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number
    id_receta_padre_id_componente_hijo?: detalle_formulacionId_receta_padreId_componente_hijoCompoundUniqueInput
    AND?: detalle_formulacionWhereInput | detalle_formulacionWhereInput[]
    OR?: detalle_formulacionWhereInput[]
    NOT?: detalle_formulacionWhereInput | detalle_formulacionWhereInput[]
    id_receta_padre?: IntFilter<"detalle_formulacion"> | number
    id_componente_hijo?: IntFilter<"detalle_formulacion"> | number
    id_articulo_especifico?: IntNullableFilter<"detalle_formulacion"> | number | null
    cantidad_usada?: DecimalFilter<"detalle_formulacion"> | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFilter<"detalle_formulacion"> | string
    nota_preparacion?: StringNullableFilter<"detalle_formulacion"> | string | null
    articulo_proveedor?: XOR<Articulo_proveedorNullableScalarRelationFilter, articulo_proveedorWhereInput> | null
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
    receta_subreceta?: XOR<Receta_subrecetaScalarRelationFilter, receta_subrecetaWhereInput>
  }, "id_detalle" | "id_receta_padre_id_componente_hijo">

  export type detalle_formulacionOrderByWithAggregationInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrderInput | SortOrder
    cantidad_usada?: SortOrder
    unidad_medida_usada?: SortOrder
    nota_preparacion?: SortOrderInput | SortOrder
    _count?: detalle_formulacionCountOrderByAggregateInput
    _avg?: detalle_formulacionAvgOrderByAggregateInput
    _max?: detalle_formulacionMaxOrderByAggregateInput
    _min?: detalle_formulacionMinOrderByAggregateInput
    _sum?: detalle_formulacionSumOrderByAggregateInput
  }

  export type detalle_formulacionScalarWhereWithAggregatesInput = {
    AND?: detalle_formulacionScalarWhereWithAggregatesInput | detalle_formulacionScalarWhereWithAggregatesInput[]
    OR?: detalle_formulacionScalarWhereWithAggregatesInput[]
    NOT?: detalle_formulacionScalarWhereWithAggregatesInput | detalle_formulacionScalarWhereWithAggregatesInput[]
    id_detalle?: IntWithAggregatesFilter<"detalle_formulacion"> | number
    id_receta_padre?: IntWithAggregatesFilter<"detalle_formulacion"> | number
    id_componente_hijo?: IntWithAggregatesFilter<"detalle_formulacion"> | number
    id_articulo_especifico?: IntNullableWithAggregatesFilter<"detalle_formulacion"> | number | null
    cantidad_usada?: DecimalWithAggregatesFilter<"detalle_formulacion"> | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringWithAggregatesFilter<"detalle_formulacion"> | string
    nota_preparacion?: StringNullableWithAggregatesFilter<"detalle_formulacion"> | string | null
  }

  export type ingrediente_baseWhereInput = {
    AND?: ingrediente_baseWhereInput | ingrediente_baseWhereInput[]
    OR?: ingrediente_baseWhereInput[]
    NOT?: ingrediente_baseWhereInput | ingrediente_baseWhereInput[]
    id_componente?: IntFilter<"ingrediente_base"> | number
    aporta_a_base_panadera?: BoolNullableFilter<"ingrediente_base"> | boolean | null
    articulo_proveedor?: Articulo_proveedorListRelationFilter
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
  }

  export type ingrediente_baseOrderByWithRelationInput = {
    id_componente?: SortOrder
    aporta_a_base_panadera?: SortOrderInput | SortOrder
    articulo_proveedor?: articulo_proveedorOrderByRelationAggregateInput
    catalogo_componente?: catalogo_componenteOrderByWithRelationInput
  }

  export type ingrediente_baseWhereUniqueInput = Prisma.AtLeast<{
    id_componente?: number
    AND?: ingrediente_baseWhereInput | ingrediente_baseWhereInput[]
    OR?: ingrediente_baseWhereInput[]
    NOT?: ingrediente_baseWhereInput | ingrediente_baseWhereInput[]
    aporta_a_base_panadera?: BoolNullableFilter<"ingrediente_base"> | boolean | null
    articulo_proveedor?: Articulo_proveedorListRelationFilter
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
  }, "id_componente">

  export type ingrediente_baseOrderByWithAggregationInput = {
    id_componente?: SortOrder
    aporta_a_base_panadera?: SortOrderInput | SortOrder
    _count?: ingrediente_baseCountOrderByAggregateInput
    _avg?: ingrediente_baseAvgOrderByAggregateInput
    _max?: ingrediente_baseMaxOrderByAggregateInput
    _min?: ingrediente_baseMinOrderByAggregateInput
    _sum?: ingrediente_baseSumOrderByAggregateInput
  }

  export type ingrediente_baseScalarWhereWithAggregatesInput = {
    AND?: ingrediente_baseScalarWhereWithAggregatesInput | ingrediente_baseScalarWhereWithAggregatesInput[]
    OR?: ingrediente_baseScalarWhereWithAggregatesInput[]
    NOT?: ingrediente_baseScalarWhereWithAggregatesInput | ingrediente_baseScalarWhereWithAggregatesInput[]
    id_componente?: IntWithAggregatesFilter<"ingrediente_base"> | number
    aporta_a_base_panadera?: BoolNullableWithAggregatesFilter<"ingrediente_base"> | boolean | null
  }

  export type proveedorWhereInput = {
    AND?: proveedorWhereInput | proveedorWhereInput[]
    OR?: proveedorWhereInput[]
    NOT?: proveedorWhereInput | proveedorWhereInput[]
    id_proveedor?: IntFilter<"proveedor"> | number
    nombre_proveedor?: StringFilter<"proveedor"> | string
    telefono?: StringNullableFilter<"proveedor"> | string | null
    email?: StringNullableFilter<"proveedor"> | string | null
    direccion?: StringNullableFilter<"proveedor"> | string | null
    activo?: BoolNullableFilter<"proveedor"> | boolean | null
    creado_en?: DateTimeNullableFilter<"proveedor"> | Date | string | null
    articulo_proveedor?: Articulo_proveedorListRelationFilter
  }

  export type proveedorOrderByWithRelationInput = {
    id_proveedor?: SortOrder
    nombre_proveedor?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    articulo_proveedor?: articulo_proveedorOrderByRelationAggregateInput
  }

  export type proveedorWhereUniqueInput = Prisma.AtLeast<{
    id_proveedor?: number
    AND?: proveedorWhereInput | proveedorWhereInput[]
    OR?: proveedorWhereInput[]
    NOT?: proveedorWhereInput | proveedorWhereInput[]
    nombre_proveedor?: StringFilter<"proveedor"> | string
    telefono?: StringNullableFilter<"proveedor"> | string | null
    email?: StringNullableFilter<"proveedor"> | string | null
    direccion?: StringNullableFilter<"proveedor"> | string | null
    activo?: BoolNullableFilter<"proveedor"> | boolean | null
    creado_en?: DateTimeNullableFilter<"proveedor"> | Date | string | null
    articulo_proveedor?: Articulo_proveedorListRelationFilter
  }, "id_proveedor">

  export type proveedorOrderByWithAggregationInput = {
    id_proveedor?: SortOrder
    nombre_proveedor?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: proveedorCountOrderByAggregateInput
    _avg?: proveedorAvgOrderByAggregateInput
    _max?: proveedorMaxOrderByAggregateInput
    _min?: proveedorMinOrderByAggregateInput
    _sum?: proveedorSumOrderByAggregateInput
  }

  export type proveedorScalarWhereWithAggregatesInput = {
    AND?: proveedorScalarWhereWithAggregatesInput | proveedorScalarWhereWithAggregatesInput[]
    OR?: proveedorScalarWhereWithAggregatesInput[]
    NOT?: proveedorScalarWhereWithAggregatesInput | proveedorScalarWhereWithAggregatesInput[]
    id_proveedor?: IntWithAggregatesFilter<"proveedor"> | number
    nombre_proveedor?: StringWithAggregatesFilter<"proveedor"> | string
    telefono?: StringNullableWithAggregatesFilter<"proveedor"> | string | null
    email?: StringNullableWithAggregatesFilter<"proveedor"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"proveedor"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"proveedor"> | boolean | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"proveedor"> | Date | string | null
  }

  export type receta_subrecetaWhereInput = {
    AND?: receta_subrecetaWhereInput | receta_subrecetaWhereInput[]
    OR?: receta_subrecetaWhereInput[]
    NOT?: receta_subrecetaWhereInput | receta_subrecetaWhereInput[]
    id_componente?: IntFilter<"receta_subreceta"> | number
    ppu_objetivo?: DecimalNullableFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: IntNullableFilter<"receta_subreceta"> | number | null
    porcentaje_merma_coccion?: DecimalNullableFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    creado_por?: IntNullableFilter<"receta_subreceta"> | number | null
    creado_en?: DateTimeNullableFilter<"receta_subreceta"> | Date | string | null
    actualizado_en?: DateTimeNullableFilter<"receta_subreceta"> | Date | string | null
    detalle_formulacion?: Detalle_formulacionListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
  }

  export type receta_subrecetaOrderByWithRelationInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrderInput | SortOrder
    unidades_tanda?: SortOrderInput | SortOrder
    porcentaje_merma_coccion?: SortOrderInput | SortOrder
    creado_por?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    actualizado_en?: SortOrderInput | SortOrder
    detalle_formulacion?: detalle_formulacionOrderByRelationAggregateInput
    usuario?: usuarioOrderByWithRelationInput
    catalogo_componente?: catalogo_componenteOrderByWithRelationInput
  }

  export type receta_subrecetaWhereUniqueInput = Prisma.AtLeast<{
    id_componente?: number
    AND?: receta_subrecetaWhereInput | receta_subrecetaWhereInput[]
    OR?: receta_subrecetaWhereInput[]
    NOT?: receta_subrecetaWhereInput | receta_subrecetaWhereInput[]
    ppu_objetivo?: DecimalNullableFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: IntNullableFilter<"receta_subreceta"> | number | null
    porcentaje_merma_coccion?: DecimalNullableFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    creado_por?: IntNullableFilter<"receta_subreceta"> | number | null
    creado_en?: DateTimeNullableFilter<"receta_subreceta"> | Date | string | null
    actualizado_en?: DateTimeNullableFilter<"receta_subreceta"> | Date | string | null
    detalle_formulacion?: Detalle_formulacionListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
  }, "id_componente">

  export type receta_subrecetaOrderByWithAggregationInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrderInput | SortOrder
    unidades_tanda?: SortOrderInput | SortOrder
    porcentaje_merma_coccion?: SortOrderInput | SortOrder
    creado_por?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    actualizado_en?: SortOrderInput | SortOrder
    _count?: receta_subrecetaCountOrderByAggregateInput
    _avg?: receta_subrecetaAvgOrderByAggregateInput
    _max?: receta_subrecetaMaxOrderByAggregateInput
    _min?: receta_subrecetaMinOrderByAggregateInput
    _sum?: receta_subrecetaSumOrderByAggregateInput
  }

  export type receta_subrecetaScalarWhereWithAggregatesInput = {
    AND?: receta_subrecetaScalarWhereWithAggregatesInput | receta_subrecetaScalarWhereWithAggregatesInput[]
    OR?: receta_subrecetaScalarWhereWithAggregatesInput[]
    NOT?: receta_subrecetaScalarWhereWithAggregatesInput | receta_subrecetaScalarWhereWithAggregatesInput[]
    id_componente?: IntWithAggregatesFilter<"receta_subreceta"> | number
    ppu_objetivo?: DecimalNullableWithAggregatesFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: IntNullableWithAggregatesFilter<"receta_subreceta"> | number | null
    porcentaje_merma_coccion?: DecimalNullableWithAggregatesFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    creado_por?: IntNullableWithAggregatesFilter<"receta_subreceta"> | number | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"receta_subreceta"> | Date | string | null
    actualizado_en?: DateTimeNullableWithAggregatesFilter<"receta_subreceta"> | Date | string | null
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id_rol?: IntFilter<"rol"> | number
    nombre_rol?: StringFilter<"rol"> | string
    usuario?: UsuarioListRelationFilter
  }

  export type rolOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
    usuario?: usuarioOrderByRelationAggregateInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    nombre_rol?: string
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    usuario?: UsuarioListRelationFilter
  }, "id_rol" | "nombre_rol">

  export type rolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"rol"> | number
    nombre_rol?: StringWithAggregatesFilter<"rol"> | string
  }

  export type servicio_costoWhereInput = {
    AND?: servicio_costoWhereInput | servicio_costoWhereInput[]
    OR?: servicio_costoWhereInput[]
    NOT?: servicio_costoWhereInput | servicio_costoWhereInput[]
    id_componente?: IntFilter<"servicio_costo"> | number
    costo_por_unidad_medida?: DecimalFilter<"servicio_costo"> | Decimal | DecimalJsLike | number | string
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
  }

  export type servicio_costoOrderByWithRelationInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
    catalogo_componente?: catalogo_componenteOrderByWithRelationInput
  }

  export type servicio_costoWhereUniqueInput = Prisma.AtLeast<{
    id_componente?: number
    AND?: servicio_costoWhereInput | servicio_costoWhereInput[]
    OR?: servicio_costoWhereInput[]
    NOT?: servicio_costoWhereInput | servicio_costoWhereInput[]
    costo_por_unidad_medida?: DecimalFilter<"servicio_costo"> | Decimal | DecimalJsLike | number | string
    catalogo_componente?: XOR<Catalogo_componenteScalarRelationFilter, catalogo_componenteWhereInput>
  }, "id_componente">

  export type servicio_costoOrderByWithAggregationInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
    _count?: servicio_costoCountOrderByAggregateInput
    _avg?: servicio_costoAvgOrderByAggregateInput
    _max?: servicio_costoMaxOrderByAggregateInput
    _min?: servicio_costoMinOrderByAggregateInput
    _sum?: servicio_costoSumOrderByAggregateInput
  }

  export type servicio_costoScalarWhereWithAggregatesInput = {
    AND?: servicio_costoScalarWhereWithAggregatesInput | servicio_costoScalarWhereWithAggregatesInput[]
    OR?: servicio_costoScalarWhereWithAggregatesInput[]
    NOT?: servicio_costoScalarWhereWithAggregatesInput | servicio_costoScalarWhereWithAggregatesInput[]
    id_componente?: IntWithAggregatesFilter<"servicio_costo"> | number
    costo_por_unidad_medida?: DecimalWithAggregatesFilter<"servicio_costo"> | Decimal | DecimalJsLike | number | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre_usuario?: StringFilter<"usuario"> | string
    apellido_usuario?: StringNullableFilter<"usuario"> | string | null
    email?: StringNullableFilter<"usuario"> | string | null
    id_rol?: IntFilter<"usuario"> | number
    activo?: BoolNullableFilter<"usuario"> | boolean | null
    receta_subreceta?: Receta_subrecetaListRelationFilter
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    apellido_usuario?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    id_rol?: SortOrder
    activo?: SortOrderInput | SortOrder
    receta_subreceta?: receta_subrecetaOrderByRelationAggregateInput
    rol?: rolOrderByWithRelationInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre_usuario?: StringFilter<"usuario"> | string
    apellido_usuario?: StringNullableFilter<"usuario"> | string | null
    id_rol?: IntFilter<"usuario"> | number
    activo?: BoolNullableFilter<"usuario"> | boolean | null
    receta_subreceta?: Receta_subrecetaListRelationFilter
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
  }, "id_usuario" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    apellido_usuario?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    id_rol?: SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuario"> | string
    apellido_usuario?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    id_rol?: IntWithAggregatesFilter<"usuario"> | number
    activo?: BoolNullableWithAggregatesFilter<"usuario"> | boolean | null
  }

  export type articulo_proveedorCreateInput = {
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    ingrediente_base: ingrediente_baseCreateNestedOneWithoutArticulo_proveedorInput
    proveedor: proveedorCreateNestedOneWithoutArticulo_proveedorInput
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorUncheckedCreateInput = {
    id_articulo?: number
    id_componente: number
    id_proveedor: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorUpdateInput = {
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingrediente_base?: ingrediente_baseUpdateOneRequiredWithoutArticulo_proveedorNestedInput
    proveedor?: proveedorUpdateOneRequiredWithoutArticulo_proveedorNestedInput
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorUncheckedUpdateInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_componente?: IntFieldUpdateOperationsInput | number
    id_proveedor?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorCreateManyInput = {
    id_articulo?: number
    id_componente: number
    id_proveedor: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
  }

  export type articulo_proveedorUpdateManyMutationInput = {
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articulo_proveedorUncheckedUpdateManyInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_componente?: IntFieldUpdateOperationsInput | number
    id_proveedor?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type catalogo_componenteCreateInput = {
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutCatalogo_componenteInput
    ingrediente_base?: ingrediente_baseCreateNestedOneWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteUncheckedCreateInput = {
    id_componente?: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutCatalogo_componenteInput
    ingrediente_base?: ingrediente_baseUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoUncheckedCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutCatalogo_componenteNestedInput
    ingrediente_base?: ingrediente_baseUpdateOneWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type catalogo_componenteUncheckedUpdateInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteNestedInput
    ingrediente_base?: ingrediente_baseUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type catalogo_componenteCreateManyInput = {
    id_componente?: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
  }

  export type catalogo_componenteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type catalogo_componenteUncheckedUpdateManyInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type detalle_formulacionCreateInput = {
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
    articulo_proveedor?: articulo_proveedorCreateNestedOneWithoutDetalle_formulacionInput
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutDetalle_formulacionInput
    receta_subreceta: receta_subrecetaCreateNestedOneWithoutDetalle_formulacionInput
  }

  export type detalle_formulacionUncheckedCreateInput = {
    id_detalle?: number
    id_receta_padre: number
    id_componente_hijo: number
    id_articulo_especifico?: number | null
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionUpdateInput = {
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
    articulo_proveedor?: articulo_proveedorUpdateOneWithoutDetalle_formulacionNestedInput
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutDetalle_formulacionNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneRequiredWithoutDetalle_formulacionNestedInput
  }

  export type detalle_formulacionUncheckedUpdateInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta_padre?: IntFieldUpdateOperationsInput | number
    id_componente_hijo?: IntFieldUpdateOperationsInput | number
    id_articulo_especifico?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_formulacionCreateManyInput = {
    id_detalle?: number
    id_receta_padre: number
    id_componente_hijo: number
    id_articulo_especifico?: number | null
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionUpdateManyMutationInput = {
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_formulacionUncheckedUpdateManyInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta_padre?: IntFieldUpdateOperationsInput | number
    id_componente_hijo?: IntFieldUpdateOperationsInput | number
    id_articulo_especifico?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ingrediente_baseCreateInput = {
    aporta_a_base_panadera?: boolean | null
    articulo_proveedor?: articulo_proveedorCreateNestedManyWithoutIngrediente_baseInput
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutIngrediente_baseInput
  }

  export type ingrediente_baseUncheckedCreateInput = {
    id_componente: number
    aporta_a_base_panadera?: boolean | null
    articulo_proveedor?: articulo_proveedorUncheckedCreateNestedManyWithoutIngrediente_baseInput
  }

  export type ingrediente_baseUpdateInput = {
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
    articulo_proveedor?: articulo_proveedorUpdateManyWithoutIngrediente_baseNestedInput
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutIngrediente_baseNestedInput
  }

  export type ingrediente_baseUncheckedUpdateInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
    articulo_proveedor?: articulo_proveedorUncheckedUpdateManyWithoutIngrediente_baseNestedInput
  }

  export type ingrediente_baseCreateManyInput = {
    id_componente: number
    aporta_a_base_panadera?: boolean | null
  }

  export type ingrediente_baseUpdateManyMutationInput = {
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ingrediente_baseUncheckedUpdateManyInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type proveedorCreateInput = {
    nombre_proveedor: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    articulo_proveedor?: articulo_proveedorCreateNestedManyWithoutProveedorInput
  }

  export type proveedorUncheckedCreateInput = {
    id_proveedor?: number
    nombre_proveedor: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    articulo_proveedor?: articulo_proveedorUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type proveedorUpdateInput = {
    nombre_proveedor?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articulo_proveedor?: articulo_proveedorUpdateManyWithoutProveedorNestedInput
  }

  export type proveedorUncheckedUpdateInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombre_proveedor?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articulo_proveedor?: articulo_proveedorUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type proveedorCreateManyInput = {
    id_proveedor?: number
    nombre_proveedor: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type proveedorUpdateManyMutationInput = {
    nombre_proveedor?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proveedorUncheckedUpdateManyInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombre_proveedor?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type receta_subrecetaCreateInput = {
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutReceta_subrecetaInput
    usuario?: usuarioCreateNestedOneWithoutReceta_subrecetaInput
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaUncheckedCreateInput = {
    id_componente: number
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_por?: number | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaUpdateInput = {
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutReceta_subrecetaNestedInput
    usuario?: usuarioUpdateOneWithoutReceta_subrecetaNestedInput
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutReceta_subrecetaNestedInput
  }

  export type receta_subrecetaUncheckedUpdateInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_por?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutReceta_subrecetaNestedInput
  }

  export type receta_subrecetaCreateManyInput = {
    id_componente: number
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_por?: number | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
  }

  export type receta_subrecetaUpdateManyMutationInput = {
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type receta_subrecetaUncheckedUpdateManyInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_por?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolCreateInput = {
    nombre_rol: string
    usuario?: usuarioCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateInput = {
    id_rol?: number
    nombre_rol: string
    usuario?: usuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolUpdateInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rolCreateManyInput = {
    id_rol?: number
    nombre_rol: string
  }

  export type rolUpdateManyMutationInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type servicio_costoCreateInput = {
    costo_por_unidad_medida: Decimal | DecimalJsLike | number | string
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutServicio_costoInput
  }

  export type servicio_costoUncheckedCreateInput = {
    id_componente: number
    costo_por_unidad_medida: Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoUpdateInput = {
    costo_por_unidad_medida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutServicio_costoNestedInput
  }

  export type servicio_costoUncheckedUpdateInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    costo_por_unidad_medida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoCreateManyInput = {
    id_componente: number
    costo_por_unidad_medida: Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoUpdateManyMutationInput = {
    costo_por_unidad_medida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoUncheckedUpdateManyInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    costo_por_unidad_medida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usuarioCreateInput = {
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    activo?: boolean | null
    receta_subreceta?: receta_subrecetaCreateNestedManyWithoutUsuarioInput
    rol: rolCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    id_rol: number
    activo?: boolean | null
    receta_subreceta?: receta_subrecetaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    receta_subreceta?: receta_subrecetaUpdateManyWithoutUsuarioNestedInput
    rol?: rolUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_rol?: IntFieldUpdateOperationsInput | number
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    receta_subreceta?: receta_subrecetaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    id_rol: number
    activo?: boolean | null
  }

  export type usuarioUpdateManyMutationInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_rol?: IntFieldUpdateOperationsInput | number
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Ingrediente_baseScalarRelationFilter = {
    is?: ingrediente_baseWhereInput
    isNot?: ingrediente_baseWhereInput
  }

  export type ProveedorScalarRelationFilter = {
    is?: proveedorWhereInput
    isNot?: proveedorWhereInput
  }

  export type Detalle_formulacionListRelationFilter = {
    every?: detalle_formulacionWhereInput
    some?: detalle_formulacionWhereInput
    none?: detalle_formulacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detalle_formulacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articulo_proveedorId_componenteId_proveedorCompoundUniqueInput = {
    id_componente: number
    id_proveedor: number
  }

  export type articulo_proveedorCountOrderByAggregateInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    marca_descripcion?: SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrder
    porcentaje_grasa?: SortOrder
    porcentaje_merma_limpieza?: SortOrder
    es_predeterminado?: SortOrder
    creado_en?: SortOrder
  }

  export type articulo_proveedorAvgOrderByAggregateInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrder
    porcentaje_grasa?: SortOrder
    porcentaje_merma_limpieza?: SortOrder
  }

  export type articulo_proveedorMaxOrderByAggregateInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    marca_descripcion?: SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrder
    porcentaje_grasa?: SortOrder
    porcentaje_merma_limpieza?: SortOrder
    es_predeterminado?: SortOrder
    creado_en?: SortOrder
  }

  export type articulo_proveedorMinOrderByAggregateInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    marca_descripcion?: SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrder
    porcentaje_grasa?: SortOrder
    porcentaje_merma_limpieza?: SortOrder
    es_predeterminado?: SortOrder
    creado_en?: SortOrder
  }

  export type articulo_proveedorSumOrderByAggregateInput = {
    id_articulo?: SortOrder
    id_componente?: SortOrder
    id_proveedor?: SortOrder
    costo_por_unidad?: SortOrder
    porcentaje_agua?: SortOrder
    porcentaje_grasa?: SortOrder
    porcentaje_merma_limpieza?: SortOrder
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
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type Ingrediente_baseNullableScalarRelationFilter = {
    is?: ingrediente_baseWhereInput | null
    isNot?: ingrediente_baseWhereInput | null
  }

  export type Receta_subrecetaNullableScalarRelationFilter = {
    is?: receta_subrecetaWhereInput | null
    isNot?: receta_subrecetaWhereInput | null
  }

  export type Servicio_costoNullableScalarRelationFilter = {
    is?: servicio_costoWhereInput | null
    isNot?: servicio_costoWhereInput | null
  }

  export type catalogo_componenteCountOrderByAggregateInput = {
    id_componente?: SortOrder
    nombre?: SortOrder
    tipo_componente?: SortOrder
    unidad_medida?: SortOrder
    activo?: SortOrder
  }

  export type catalogo_componenteAvgOrderByAggregateInput = {
    id_componente?: SortOrder
  }

  export type catalogo_componenteMaxOrderByAggregateInput = {
    id_componente?: SortOrder
    nombre?: SortOrder
    tipo_componente?: SortOrder
    unidad_medida?: SortOrder
    activo?: SortOrder
  }

  export type catalogo_componenteMinOrderByAggregateInput = {
    id_componente?: SortOrder
    nombre?: SortOrder
    tipo_componente?: SortOrder
    unidad_medida?: SortOrder
    activo?: SortOrder
  }

  export type catalogo_componenteSumOrderByAggregateInput = {
    id_componente?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Articulo_proveedorNullableScalarRelationFilter = {
    is?: articulo_proveedorWhereInput | null
    isNot?: articulo_proveedorWhereInput | null
  }

  export type Catalogo_componenteScalarRelationFilter = {
    is?: catalogo_componenteWhereInput
    isNot?: catalogo_componenteWhereInput
  }

  export type Receta_subrecetaScalarRelationFilter = {
    is?: receta_subrecetaWhereInput
    isNot?: receta_subrecetaWhereInput
  }

  export type detalle_formulacionId_receta_padreId_componente_hijoCompoundUniqueInput = {
    id_receta_padre: number
    id_componente_hijo: number
  }

  export type detalle_formulacionCountOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrder
    cantidad_usada?: SortOrder
    unidad_medida_usada?: SortOrder
    nota_preparacion?: SortOrder
  }

  export type detalle_formulacionAvgOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrder
    cantidad_usada?: SortOrder
  }

  export type detalle_formulacionMaxOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrder
    cantidad_usada?: SortOrder
    unidad_medida_usada?: SortOrder
    nota_preparacion?: SortOrder
  }

  export type detalle_formulacionMinOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrder
    cantidad_usada?: SortOrder
    unidad_medida_usada?: SortOrder
    nota_preparacion?: SortOrder
  }

  export type detalle_formulacionSumOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta_padre?: SortOrder
    id_componente_hijo?: SortOrder
    id_articulo_especifico?: SortOrder
    cantidad_usada?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Articulo_proveedorListRelationFilter = {
    every?: articulo_proveedorWhereInput
    some?: articulo_proveedorWhereInput
    none?: articulo_proveedorWhereInput
  }

  export type articulo_proveedorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ingrediente_baseCountOrderByAggregateInput = {
    id_componente?: SortOrder
    aporta_a_base_panadera?: SortOrder
  }

  export type ingrediente_baseAvgOrderByAggregateInput = {
    id_componente?: SortOrder
  }

  export type ingrediente_baseMaxOrderByAggregateInput = {
    id_componente?: SortOrder
    aporta_a_base_panadera?: SortOrder
  }

  export type ingrediente_baseMinOrderByAggregateInput = {
    id_componente?: SortOrder
    aporta_a_base_panadera?: SortOrder
  }

  export type ingrediente_baseSumOrderByAggregateInput = {
    id_componente?: SortOrder
  }

  export type proveedorCountOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombre_proveedor?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type proveedorAvgOrderByAggregateInput = {
    id_proveedor?: SortOrder
  }

  export type proveedorMaxOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombre_proveedor?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type proveedorMinOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombre_proveedor?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type proveedorSumOrderByAggregateInput = {
    id_proveedor?: SortOrder
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type receta_subrecetaCountOrderByAggregateInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrder
    unidades_tanda?: SortOrder
    porcentaje_merma_coccion?: SortOrder
    creado_por?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type receta_subrecetaAvgOrderByAggregateInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrder
    unidades_tanda?: SortOrder
    porcentaje_merma_coccion?: SortOrder
    creado_por?: SortOrder
  }

  export type receta_subrecetaMaxOrderByAggregateInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrder
    unidades_tanda?: SortOrder
    porcentaje_merma_coccion?: SortOrder
    creado_por?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type receta_subrecetaMinOrderByAggregateInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrder
    unidades_tanda?: SortOrder
    porcentaje_merma_coccion?: SortOrder
    creado_por?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type receta_subrecetaSumOrderByAggregateInput = {
    id_componente?: SortOrder
    ppu_objetivo?: SortOrder
    unidades_tanda?: SortOrder
    porcentaje_merma_coccion?: SortOrder
    creado_por?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type servicio_costoCountOrderByAggregateInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
  }

  export type servicio_costoAvgOrderByAggregateInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
  }

  export type servicio_costoMaxOrderByAggregateInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
  }

  export type servicio_costoMinOrderByAggregateInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
  }

  export type servicio_costoSumOrderByAggregateInput = {
    id_componente?: SortOrder
    costo_por_unidad_medida?: SortOrder
  }

  export type Receta_subrecetaListRelationFilter = {
    every?: receta_subrecetaWhereInput
    some?: receta_subrecetaWhereInput
    none?: receta_subrecetaWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: rolWhereInput
    isNot?: rolWhereInput
  }

  export type receta_subrecetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    apellido_usuario?: SortOrder
    email?: SortOrder
    id_rol?: SortOrder
    activo?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    apellido_usuario?: SortOrder
    email?: SortOrder
    id_rol?: SortOrder
    activo?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    apellido_usuario?: SortOrder
    email?: SortOrder
    id_rol?: SortOrder
    activo?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type ingrediente_baseCreateNestedOneWithoutArticulo_proveedorInput = {
    create?: XOR<ingrediente_baseCreateWithoutArticulo_proveedorInput, ingrediente_baseUncheckedCreateWithoutArticulo_proveedorInput>
    connectOrCreate?: ingrediente_baseCreateOrConnectWithoutArticulo_proveedorInput
    connect?: ingrediente_baseWhereUniqueInput
  }

  export type proveedorCreateNestedOneWithoutArticulo_proveedorInput = {
    create?: XOR<proveedorCreateWithoutArticulo_proveedorInput, proveedorUncheckedCreateWithoutArticulo_proveedorInput>
    connectOrCreate?: proveedorCreateOrConnectWithoutArticulo_proveedorInput
    connect?: proveedorWhereUniqueInput
  }

  export type detalle_formulacionCreateNestedManyWithoutArticulo_proveedorInput = {
    create?: XOR<detalle_formulacionCreateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput> | detalle_formulacionCreateWithoutArticulo_proveedorInput[] | detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput | detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput[]
    createMany?: detalle_formulacionCreateManyArticulo_proveedorInputEnvelope
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
  }

  export type detalle_formulacionUncheckedCreateNestedManyWithoutArticulo_proveedorInput = {
    create?: XOR<detalle_formulacionCreateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput> | detalle_formulacionCreateWithoutArticulo_proveedorInput[] | detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput | detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput[]
    createMany?: detalle_formulacionCreateManyArticulo_proveedorInputEnvelope
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ingrediente_baseUpdateOneRequiredWithoutArticulo_proveedorNestedInput = {
    create?: XOR<ingrediente_baseCreateWithoutArticulo_proveedorInput, ingrediente_baseUncheckedCreateWithoutArticulo_proveedorInput>
    connectOrCreate?: ingrediente_baseCreateOrConnectWithoutArticulo_proveedorInput
    upsert?: ingrediente_baseUpsertWithoutArticulo_proveedorInput
    connect?: ingrediente_baseWhereUniqueInput
    update?: XOR<XOR<ingrediente_baseUpdateToOneWithWhereWithoutArticulo_proveedorInput, ingrediente_baseUpdateWithoutArticulo_proveedorInput>, ingrediente_baseUncheckedUpdateWithoutArticulo_proveedorInput>
  }

  export type proveedorUpdateOneRequiredWithoutArticulo_proveedorNestedInput = {
    create?: XOR<proveedorCreateWithoutArticulo_proveedorInput, proveedorUncheckedCreateWithoutArticulo_proveedorInput>
    connectOrCreate?: proveedorCreateOrConnectWithoutArticulo_proveedorInput
    upsert?: proveedorUpsertWithoutArticulo_proveedorInput
    connect?: proveedorWhereUniqueInput
    update?: XOR<XOR<proveedorUpdateToOneWithWhereWithoutArticulo_proveedorInput, proveedorUpdateWithoutArticulo_proveedorInput>, proveedorUncheckedUpdateWithoutArticulo_proveedorInput>
  }

  export type detalle_formulacionUpdateManyWithoutArticulo_proveedorNestedInput = {
    create?: XOR<detalle_formulacionCreateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput> | detalle_formulacionCreateWithoutArticulo_proveedorInput[] | detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput | detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput[]
    upsert?: detalle_formulacionUpsertWithWhereUniqueWithoutArticulo_proveedorInput | detalle_formulacionUpsertWithWhereUniqueWithoutArticulo_proveedorInput[]
    createMany?: detalle_formulacionCreateManyArticulo_proveedorInputEnvelope
    set?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    disconnect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    delete?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    update?: detalle_formulacionUpdateWithWhereUniqueWithoutArticulo_proveedorInput | detalle_formulacionUpdateWithWhereUniqueWithoutArticulo_proveedorInput[]
    updateMany?: detalle_formulacionUpdateManyWithWhereWithoutArticulo_proveedorInput | detalle_formulacionUpdateManyWithWhereWithoutArticulo_proveedorInput[]
    deleteMany?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type detalle_formulacionUncheckedUpdateManyWithoutArticulo_proveedorNestedInput = {
    create?: XOR<detalle_formulacionCreateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput> | detalle_formulacionCreateWithoutArticulo_proveedorInput[] | detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput | detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput[]
    upsert?: detalle_formulacionUpsertWithWhereUniqueWithoutArticulo_proveedorInput | detalle_formulacionUpsertWithWhereUniqueWithoutArticulo_proveedorInput[]
    createMany?: detalle_formulacionCreateManyArticulo_proveedorInputEnvelope
    set?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    disconnect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    delete?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    update?: detalle_formulacionUpdateWithWhereUniqueWithoutArticulo_proveedorInput | detalle_formulacionUpdateWithWhereUniqueWithoutArticulo_proveedorInput[]
    updateMany?: detalle_formulacionUpdateManyWithWhereWithoutArticulo_proveedorInput | detalle_formulacionUpdateManyWithWhereWithoutArticulo_proveedorInput[]
    deleteMany?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
  }

  export type detalle_formulacionCreateNestedManyWithoutCatalogo_componenteInput = {
    create?: XOR<detalle_formulacionCreateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput> | detalle_formulacionCreateWithoutCatalogo_componenteInput[] | detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput | detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput[]
    createMany?: detalle_formulacionCreateManyCatalogo_componenteInputEnvelope
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
  }

  export type ingrediente_baseCreateNestedOneWithoutCatalogo_componenteInput = {
    create?: XOR<ingrediente_baseCreateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: ingrediente_baseCreateOrConnectWithoutCatalogo_componenteInput
    connect?: ingrediente_baseWhereUniqueInput
  }

  export type receta_subrecetaCreateNestedOneWithoutCatalogo_componenteInput = {
    create?: XOR<receta_subrecetaCreateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutCatalogo_componenteInput
    connect?: receta_subrecetaWhereUniqueInput
  }

  export type servicio_costoCreateNestedOneWithoutCatalogo_componenteInput = {
    create?: XOR<servicio_costoCreateWithoutCatalogo_componenteInput, servicio_costoUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: servicio_costoCreateOrConnectWithoutCatalogo_componenteInput
    connect?: servicio_costoWhereUniqueInput
  }

  export type detalle_formulacionUncheckedCreateNestedManyWithoutCatalogo_componenteInput = {
    create?: XOR<detalle_formulacionCreateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput> | detalle_formulacionCreateWithoutCatalogo_componenteInput[] | detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput | detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput[]
    createMany?: detalle_formulacionCreateManyCatalogo_componenteInputEnvelope
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
  }

  export type ingrediente_baseUncheckedCreateNestedOneWithoutCatalogo_componenteInput = {
    create?: XOR<ingrediente_baseCreateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: ingrediente_baseCreateOrConnectWithoutCatalogo_componenteInput
    connect?: ingrediente_baseWhereUniqueInput
  }

  export type receta_subrecetaUncheckedCreateNestedOneWithoutCatalogo_componenteInput = {
    create?: XOR<receta_subrecetaCreateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutCatalogo_componenteInput
    connect?: receta_subrecetaWhereUniqueInput
  }

  export type servicio_costoUncheckedCreateNestedOneWithoutCatalogo_componenteInput = {
    create?: XOR<servicio_costoCreateWithoutCatalogo_componenteInput, servicio_costoUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: servicio_costoCreateOrConnectWithoutCatalogo_componenteInput
    connect?: servicio_costoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type detalle_formulacionUpdateManyWithoutCatalogo_componenteNestedInput = {
    create?: XOR<detalle_formulacionCreateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput> | detalle_formulacionCreateWithoutCatalogo_componenteInput[] | detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput | detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput[]
    upsert?: detalle_formulacionUpsertWithWhereUniqueWithoutCatalogo_componenteInput | detalle_formulacionUpsertWithWhereUniqueWithoutCatalogo_componenteInput[]
    createMany?: detalle_formulacionCreateManyCatalogo_componenteInputEnvelope
    set?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    disconnect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    delete?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    update?: detalle_formulacionUpdateWithWhereUniqueWithoutCatalogo_componenteInput | detalle_formulacionUpdateWithWhereUniqueWithoutCatalogo_componenteInput[]
    updateMany?: detalle_formulacionUpdateManyWithWhereWithoutCatalogo_componenteInput | detalle_formulacionUpdateManyWithWhereWithoutCatalogo_componenteInput[]
    deleteMany?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
  }

  export type ingrediente_baseUpdateOneWithoutCatalogo_componenteNestedInput = {
    create?: XOR<ingrediente_baseCreateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: ingrediente_baseCreateOrConnectWithoutCatalogo_componenteInput
    upsert?: ingrediente_baseUpsertWithoutCatalogo_componenteInput
    disconnect?: ingrediente_baseWhereInput | boolean
    delete?: ingrediente_baseWhereInput | boolean
    connect?: ingrediente_baseWhereUniqueInput
    update?: XOR<XOR<ingrediente_baseUpdateToOneWithWhereWithoutCatalogo_componenteInput, ingrediente_baseUpdateWithoutCatalogo_componenteInput>, ingrediente_baseUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type receta_subrecetaUpdateOneWithoutCatalogo_componenteNestedInput = {
    create?: XOR<receta_subrecetaCreateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutCatalogo_componenteInput
    upsert?: receta_subrecetaUpsertWithoutCatalogo_componenteInput
    disconnect?: receta_subrecetaWhereInput | boolean
    delete?: receta_subrecetaWhereInput | boolean
    connect?: receta_subrecetaWhereUniqueInput
    update?: XOR<XOR<receta_subrecetaUpdateToOneWithWhereWithoutCatalogo_componenteInput, receta_subrecetaUpdateWithoutCatalogo_componenteInput>, receta_subrecetaUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type servicio_costoUpdateOneWithoutCatalogo_componenteNestedInput = {
    create?: XOR<servicio_costoCreateWithoutCatalogo_componenteInput, servicio_costoUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: servicio_costoCreateOrConnectWithoutCatalogo_componenteInput
    upsert?: servicio_costoUpsertWithoutCatalogo_componenteInput
    disconnect?: servicio_costoWhereInput | boolean
    delete?: servicio_costoWhereInput | boolean
    connect?: servicio_costoWhereUniqueInput
    update?: XOR<XOR<servicio_costoUpdateToOneWithWhereWithoutCatalogo_componenteInput, servicio_costoUpdateWithoutCatalogo_componenteInput>, servicio_costoUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteNestedInput = {
    create?: XOR<detalle_formulacionCreateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput> | detalle_formulacionCreateWithoutCatalogo_componenteInput[] | detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput | detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput[]
    upsert?: detalle_formulacionUpsertWithWhereUniqueWithoutCatalogo_componenteInput | detalle_formulacionUpsertWithWhereUniqueWithoutCatalogo_componenteInput[]
    createMany?: detalle_formulacionCreateManyCatalogo_componenteInputEnvelope
    set?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    disconnect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    delete?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    update?: detalle_formulacionUpdateWithWhereUniqueWithoutCatalogo_componenteInput | detalle_formulacionUpdateWithWhereUniqueWithoutCatalogo_componenteInput[]
    updateMany?: detalle_formulacionUpdateManyWithWhereWithoutCatalogo_componenteInput | detalle_formulacionUpdateManyWithWhereWithoutCatalogo_componenteInput[]
    deleteMany?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
  }

  export type ingrediente_baseUncheckedUpdateOneWithoutCatalogo_componenteNestedInput = {
    create?: XOR<ingrediente_baseCreateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: ingrediente_baseCreateOrConnectWithoutCatalogo_componenteInput
    upsert?: ingrediente_baseUpsertWithoutCatalogo_componenteInput
    disconnect?: ingrediente_baseWhereInput | boolean
    delete?: ingrediente_baseWhereInput | boolean
    connect?: ingrediente_baseWhereUniqueInput
    update?: XOR<XOR<ingrediente_baseUpdateToOneWithWhereWithoutCatalogo_componenteInput, ingrediente_baseUpdateWithoutCatalogo_componenteInput>, ingrediente_baseUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type receta_subrecetaUncheckedUpdateOneWithoutCatalogo_componenteNestedInput = {
    create?: XOR<receta_subrecetaCreateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutCatalogo_componenteInput
    upsert?: receta_subrecetaUpsertWithoutCatalogo_componenteInput
    disconnect?: receta_subrecetaWhereInput | boolean
    delete?: receta_subrecetaWhereInput | boolean
    connect?: receta_subrecetaWhereUniqueInput
    update?: XOR<XOR<receta_subrecetaUpdateToOneWithWhereWithoutCatalogo_componenteInput, receta_subrecetaUpdateWithoutCatalogo_componenteInput>, receta_subrecetaUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type servicio_costoUncheckedUpdateOneWithoutCatalogo_componenteNestedInput = {
    create?: XOR<servicio_costoCreateWithoutCatalogo_componenteInput, servicio_costoUncheckedCreateWithoutCatalogo_componenteInput>
    connectOrCreate?: servicio_costoCreateOrConnectWithoutCatalogo_componenteInput
    upsert?: servicio_costoUpsertWithoutCatalogo_componenteInput
    disconnect?: servicio_costoWhereInput | boolean
    delete?: servicio_costoWhereInput | boolean
    connect?: servicio_costoWhereUniqueInput
    update?: XOR<XOR<servicio_costoUpdateToOneWithWhereWithoutCatalogo_componenteInput, servicio_costoUpdateWithoutCatalogo_componenteInput>, servicio_costoUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type articulo_proveedorCreateNestedOneWithoutDetalle_formulacionInput = {
    create?: XOR<articulo_proveedorCreateWithoutDetalle_formulacionInput, articulo_proveedorUncheckedCreateWithoutDetalle_formulacionInput>
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutDetalle_formulacionInput
    connect?: articulo_proveedorWhereUniqueInput
  }

  export type catalogo_componenteCreateNestedOneWithoutDetalle_formulacionInput = {
    create?: XOR<catalogo_componenteCreateWithoutDetalle_formulacionInput, catalogo_componenteUncheckedCreateWithoutDetalle_formulacionInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutDetalle_formulacionInput
    connect?: catalogo_componenteWhereUniqueInput
  }

  export type receta_subrecetaCreateNestedOneWithoutDetalle_formulacionInput = {
    create?: XOR<receta_subrecetaCreateWithoutDetalle_formulacionInput, receta_subrecetaUncheckedCreateWithoutDetalle_formulacionInput>
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutDetalle_formulacionInput
    connect?: receta_subrecetaWhereUniqueInput
  }

  export type articulo_proveedorUpdateOneWithoutDetalle_formulacionNestedInput = {
    create?: XOR<articulo_proveedorCreateWithoutDetalle_formulacionInput, articulo_proveedorUncheckedCreateWithoutDetalle_formulacionInput>
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutDetalle_formulacionInput
    upsert?: articulo_proveedorUpsertWithoutDetalle_formulacionInput
    disconnect?: articulo_proveedorWhereInput | boolean
    delete?: articulo_proveedorWhereInput | boolean
    connect?: articulo_proveedorWhereUniqueInput
    update?: XOR<XOR<articulo_proveedorUpdateToOneWithWhereWithoutDetalle_formulacionInput, articulo_proveedorUpdateWithoutDetalle_formulacionInput>, articulo_proveedorUncheckedUpdateWithoutDetalle_formulacionInput>
  }

  export type catalogo_componenteUpdateOneRequiredWithoutDetalle_formulacionNestedInput = {
    create?: XOR<catalogo_componenteCreateWithoutDetalle_formulacionInput, catalogo_componenteUncheckedCreateWithoutDetalle_formulacionInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutDetalle_formulacionInput
    upsert?: catalogo_componenteUpsertWithoutDetalle_formulacionInput
    connect?: catalogo_componenteWhereUniqueInput
    update?: XOR<XOR<catalogo_componenteUpdateToOneWithWhereWithoutDetalle_formulacionInput, catalogo_componenteUpdateWithoutDetalle_formulacionInput>, catalogo_componenteUncheckedUpdateWithoutDetalle_formulacionInput>
  }

  export type receta_subrecetaUpdateOneRequiredWithoutDetalle_formulacionNestedInput = {
    create?: XOR<receta_subrecetaCreateWithoutDetalle_formulacionInput, receta_subrecetaUncheckedCreateWithoutDetalle_formulacionInput>
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutDetalle_formulacionInput
    upsert?: receta_subrecetaUpsertWithoutDetalle_formulacionInput
    connect?: receta_subrecetaWhereUniqueInput
    update?: XOR<XOR<receta_subrecetaUpdateToOneWithWhereWithoutDetalle_formulacionInput, receta_subrecetaUpdateWithoutDetalle_formulacionInput>, receta_subrecetaUncheckedUpdateWithoutDetalle_formulacionInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type articulo_proveedorCreateNestedManyWithoutIngrediente_baseInput = {
    create?: XOR<articulo_proveedorCreateWithoutIngrediente_baseInput, articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput> | articulo_proveedorCreateWithoutIngrediente_baseInput[] | articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput | articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput[]
    createMany?: articulo_proveedorCreateManyIngrediente_baseInputEnvelope
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
  }

  export type catalogo_componenteCreateNestedOneWithoutIngrediente_baseInput = {
    create?: XOR<catalogo_componenteCreateWithoutIngrediente_baseInput, catalogo_componenteUncheckedCreateWithoutIngrediente_baseInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutIngrediente_baseInput
    connect?: catalogo_componenteWhereUniqueInput
  }

  export type articulo_proveedorUncheckedCreateNestedManyWithoutIngrediente_baseInput = {
    create?: XOR<articulo_proveedorCreateWithoutIngrediente_baseInput, articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput> | articulo_proveedorCreateWithoutIngrediente_baseInput[] | articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput | articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput[]
    createMany?: articulo_proveedorCreateManyIngrediente_baseInputEnvelope
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
  }

  export type articulo_proveedorUpdateManyWithoutIngrediente_baseNestedInput = {
    create?: XOR<articulo_proveedorCreateWithoutIngrediente_baseInput, articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput> | articulo_proveedorCreateWithoutIngrediente_baseInput[] | articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput | articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput[]
    upsert?: articulo_proveedorUpsertWithWhereUniqueWithoutIngrediente_baseInput | articulo_proveedorUpsertWithWhereUniqueWithoutIngrediente_baseInput[]
    createMany?: articulo_proveedorCreateManyIngrediente_baseInputEnvelope
    set?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    disconnect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    delete?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    update?: articulo_proveedorUpdateWithWhereUniqueWithoutIngrediente_baseInput | articulo_proveedorUpdateWithWhereUniqueWithoutIngrediente_baseInput[]
    updateMany?: articulo_proveedorUpdateManyWithWhereWithoutIngrediente_baseInput | articulo_proveedorUpdateManyWithWhereWithoutIngrediente_baseInput[]
    deleteMany?: articulo_proveedorScalarWhereInput | articulo_proveedorScalarWhereInput[]
  }

  export type catalogo_componenteUpdateOneRequiredWithoutIngrediente_baseNestedInput = {
    create?: XOR<catalogo_componenteCreateWithoutIngrediente_baseInput, catalogo_componenteUncheckedCreateWithoutIngrediente_baseInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutIngrediente_baseInput
    upsert?: catalogo_componenteUpsertWithoutIngrediente_baseInput
    connect?: catalogo_componenteWhereUniqueInput
    update?: XOR<XOR<catalogo_componenteUpdateToOneWithWhereWithoutIngrediente_baseInput, catalogo_componenteUpdateWithoutIngrediente_baseInput>, catalogo_componenteUncheckedUpdateWithoutIngrediente_baseInput>
  }

  export type articulo_proveedorUncheckedUpdateManyWithoutIngrediente_baseNestedInput = {
    create?: XOR<articulo_proveedorCreateWithoutIngrediente_baseInput, articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput> | articulo_proveedorCreateWithoutIngrediente_baseInput[] | articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput | articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput[]
    upsert?: articulo_proveedorUpsertWithWhereUniqueWithoutIngrediente_baseInput | articulo_proveedorUpsertWithWhereUniqueWithoutIngrediente_baseInput[]
    createMany?: articulo_proveedorCreateManyIngrediente_baseInputEnvelope
    set?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    disconnect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    delete?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    update?: articulo_proveedorUpdateWithWhereUniqueWithoutIngrediente_baseInput | articulo_proveedorUpdateWithWhereUniqueWithoutIngrediente_baseInput[]
    updateMany?: articulo_proveedorUpdateManyWithWhereWithoutIngrediente_baseInput | articulo_proveedorUpdateManyWithWhereWithoutIngrediente_baseInput[]
    deleteMany?: articulo_proveedorScalarWhereInput | articulo_proveedorScalarWhereInput[]
  }

  export type articulo_proveedorCreateNestedManyWithoutProveedorInput = {
    create?: XOR<articulo_proveedorCreateWithoutProveedorInput, articulo_proveedorUncheckedCreateWithoutProveedorInput> | articulo_proveedorCreateWithoutProveedorInput[] | articulo_proveedorUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutProveedorInput | articulo_proveedorCreateOrConnectWithoutProveedorInput[]
    createMany?: articulo_proveedorCreateManyProveedorInputEnvelope
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
  }

  export type articulo_proveedorUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<articulo_proveedorCreateWithoutProveedorInput, articulo_proveedorUncheckedCreateWithoutProveedorInput> | articulo_proveedorCreateWithoutProveedorInput[] | articulo_proveedorUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutProveedorInput | articulo_proveedorCreateOrConnectWithoutProveedorInput[]
    createMany?: articulo_proveedorCreateManyProveedorInputEnvelope
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
  }

  export type articulo_proveedorUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<articulo_proveedorCreateWithoutProveedorInput, articulo_proveedorUncheckedCreateWithoutProveedorInput> | articulo_proveedorCreateWithoutProveedorInput[] | articulo_proveedorUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutProveedorInput | articulo_proveedorCreateOrConnectWithoutProveedorInput[]
    upsert?: articulo_proveedorUpsertWithWhereUniqueWithoutProveedorInput | articulo_proveedorUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: articulo_proveedorCreateManyProveedorInputEnvelope
    set?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    disconnect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    delete?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    update?: articulo_proveedorUpdateWithWhereUniqueWithoutProveedorInput | articulo_proveedorUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: articulo_proveedorUpdateManyWithWhereWithoutProveedorInput | articulo_proveedorUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: articulo_proveedorScalarWhereInput | articulo_proveedorScalarWhereInput[]
  }

  export type articulo_proveedorUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<articulo_proveedorCreateWithoutProveedorInput, articulo_proveedorUncheckedCreateWithoutProveedorInput> | articulo_proveedorCreateWithoutProveedorInput[] | articulo_proveedorUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: articulo_proveedorCreateOrConnectWithoutProveedorInput | articulo_proveedorCreateOrConnectWithoutProveedorInput[]
    upsert?: articulo_proveedorUpsertWithWhereUniqueWithoutProveedorInput | articulo_proveedorUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: articulo_proveedorCreateManyProveedorInputEnvelope
    set?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    disconnect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    delete?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    connect?: articulo_proveedorWhereUniqueInput | articulo_proveedorWhereUniqueInput[]
    update?: articulo_proveedorUpdateWithWhereUniqueWithoutProveedorInput | articulo_proveedorUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: articulo_proveedorUpdateManyWithWhereWithoutProveedorInput | articulo_proveedorUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: articulo_proveedorScalarWhereInput | articulo_proveedorScalarWhereInput[]
  }

  export type detalle_formulacionCreateNestedManyWithoutReceta_subrecetaInput = {
    create?: XOR<detalle_formulacionCreateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput> | detalle_formulacionCreateWithoutReceta_subrecetaInput[] | detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput | detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput[]
    createMany?: detalle_formulacionCreateManyReceta_subrecetaInputEnvelope
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
  }

  export type usuarioCreateNestedOneWithoutReceta_subrecetaInput = {
    create?: XOR<usuarioCreateWithoutReceta_subrecetaInput, usuarioUncheckedCreateWithoutReceta_subrecetaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutReceta_subrecetaInput
    connect?: usuarioWhereUniqueInput
  }

  export type catalogo_componenteCreateNestedOneWithoutReceta_subrecetaInput = {
    create?: XOR<catalogo_componenteCreateWithoutReceta_subrecetaInput, catalogo_componenteUncheckedCreateWithoutReceta_subrecetaInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutReceta_subrecetaInput
    connect?: catalogo_componenteWhereUniqueInput
  }

  export type detalle_formulacionUncheckedCreateNestedManyWithoutReceta_subrecetaInput = {
    create?: XOR<detalle_formulacionCreateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput> | detalle_formulacionCreateWithoutReceta_subrecetaInput[] | detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput | detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput[]
    createMany?: detalle_formulacionCreateManyReceta_subrecetaInputEnvelope
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
  }

  export type detalle_formulacionUpdateManyWithoutReceta_subrecetaNestedInput = {
    create?: XOR<detalle_formulacionCreateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput> | detalle_formulacionCreateWithoutReceta_subrecetaInput[] | detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput | detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput[]
    upsert?: detalle_formulacionUpsertWithWhereUniqueWithoutReceta_subrecetaInput | detalle_formulacionUpsertWithWhereUniqueWithoutReceta_subrecetaInput[]
    createMany?: detalle_formulacionCreateManyReceta_subrecetaInputEnvelope
    set?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    disconnect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    delete?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    update?: detalle_formulacionUpdateWithWhereUniqueWithoutReceta_subrecetaInput | detalle_formulacionUpdateWithWhereUniqueWithoutReceta_subrecetaInput[]
    updateMany?: detalle_formulacionUpdateManyWithWhereWithoutReceta_subrecetaInput | detalle_formulacionUpdateManyWithWhereWithoutReceta_subrecetaInput[]
    deleteMany?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
  }

  export type usuarioUpdateOneWithoutReceta_subrecetaNestedInput = {
    create?: XOR<usuarioCreateWithoutReceta_subrecetaInput, usuarioUncheckedCreateWithoutReceta_subrecetaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutReceta_subrecetaInput
    upsert?: usuarioUpsertWithoutReceta_subrecetaInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutReceta_subrecetaInput, usuarioUpdateWithoutReceta_subrecetaInput>, usuarioUncheckedUpdateWithoutReceta_subrecetaInput>
  }

  export type catalogo_componenteUpdateOneRequiredWithoutReceta_subrecetaNestedInput = {
    create?: XOR<catalogo_componenteCreateWithoutReceta_subrecetaInput, catalogo_componenteUncheckedCreateWithoutReceta_subrecetaInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutReceta_subrecetaInput
    upsert?: catalogo_componenteUpsertWithoutReceta_subrecetaInput
    connect?: catalogo_componenteWhereUniqueInput
    update?: XOR<XOR<catalogo_componenteUpdateToOneWithWhereWithoutReceta_subrecetaInput, catalogo_componenteUpdateWithoutReceta_subrecetaInput>, catalogo_componenteUncheckedUpdateWithoutReceta_subrecetaInput>
  }

  export type detalle_formulacionUncheckedUpdateManyWithoutReceta_subrecetaNestedInput = {
    create?: XOR<detalle_formulacionCreateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput> | detalle_formulacionCreateWithoutReceta_subrecetaInput[] | detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput[]
    connectOrCreate?: detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput | detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput[]
    upsert?: detalle_formulacionUpsertWithWhereUniqueWithoutReceta_subrecetaInput | detalle_formulacionUpsertWithWhereUniqueWithoutReceta_subrecetaInput[]
    createMany?: detalle_formulacionCreateManyReceta_subrecetaInputEnvelope
    set?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    disconnect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    delete?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    connect?: detalle_formulacionWhereUniqueInput | detalle_formulacionWhereUniqueInput[]
    update?: detalle_formulacionUpdateWithWhereUniqueWithoutReceta_subrecetaInput | detalle_formulacionUpdateWithWhereUniqueWithoutReceta_subrecetaInput[]
    updateMany?: detalle_formulacionUpdateManyWithWhereWithoutReceta_subrecetaInput | detalle_formulacionUpdateManyWithWhereWithoutReceta_subrecetaInput[]
    deleteMany?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
  }

  export type usuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutRolInput | usuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutRolInput | usuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutRolInput | usuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutRolInput | usuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutRolInput | usuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutRolInput | usuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type catalogo_componenteCreateNestedOneWithoutServicio_costoInput = {
    create?: XOR<catalogo_componenteCreateWithoutServicio_costoInput, catalogo_componenteUncheckedCreateWithoutServicio_costoInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutServicio_costoInput
    connect?: catalogo_componenteWhereUniqueInput
  }

  export type catalogo_componenteUpdateOneRequiredWithoutServicio_costoNestedInput = {
    create?: XOR<catalogo_componenteCreateWithoutServicio_costoInput, catalogo_componenteUncheckedCreateWithoutServicio_costoInput>
    connectOrCreate?: catalogo_componenteCreateOrConnectWithoutServicio_costoInput
    upsert?: catalogo_componenteUpsertWithoutServicio_costoInput
    connect?: catalogo_componenteWhereUniqueInput
    update?: XOR<XOR<catalogo_componenteUpdateToOneWithWhereWithoutServicio_costoInput, catalogo_componenteUpdateWithoutServicio_costoInput>, catalogo_componenteUncheckedUpdateWithoutServicio_costoInput>
  }

  export type receta_subrecetaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<receta_subrecetaCreateWithoutUsuarioInput, receta_subrecetaUncheckedCreateWithoutUsuarioInput> | receta_subrecetaCreateWithoutUsuarioInput[] | receta_subrecetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutUsuarioInput | receta_subrecetaCreateOrConnectWithoutUsuarioInput[]
    createMany?: receta_subrecetaCreateManyUsuarioInputEnvelope
    connect?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
  }

  export type rolCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<rolCreateWithoutUsuarioInput, rolUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuarioInput
    connect?: rolWhereUniqueInput
  }

  export type receta_subrecetaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<receta_subrecetaCreateWithoutUsuarioInput, receta_subrecetaUncheckedCreateWithoutUsuarioInput> | receta_subrecetaCreateWithoutUsuarioInput[] | receta_subrecetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutUsuarioInput | receta_subrecetaCreateOrConnectWithoutUsuarioInput[]
    createMany?: receta_subrecetaCreateManyUsuarioInputEnvelope
    connect?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
  }

  export type receta_subrecetaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<receta_subrecetaCreateWithoutUsuarioInput, receta_subrecetaUncheckedCreateWithoutUsuarioInput> | receta_subrecetaCreateWithoutUsuarioInput[] | receta_subrecetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutUsuarioInput | receta_subrecetaCreateOrConnectWithoutUsuarioInput[]
    upsert?: receta_subrecetaUpsertWithWhereUniqueWithoutUsuarioInput | receta_subrecetaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: receta_subrecetaCreateManyUsuarioInputEnvelope
    set?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    disconnect?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    delete?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    connect?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    update?: receta_subrecetaUpdateWithWhereUniqueWithoutUsuarioInput | receta_subrecetaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: receta_subrecetaUpdateManyWithWhereWithoutUsuarioInput | receta_subrecetaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: receta_subrecetaScalarWhereInput | receta_subrecetaScalarWhereInput[]
  }

  export type rolUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<rolCreateWithoutUsuarioInput, rolUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuarioInput
    upsert?: rolUpsertWithoutUsuarioInput
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutUsuarioInput, rolUpdateWithoutUsuarioInput>, rolUncheckedUpdateWithoutUsuarioInput>
  }

  export type receta_subrecetaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<receta_subrecetaCreateWithoutUsuarioInput, receta_subrecetaUncheckedCreateWithoutUsuarioInput> | receta_subrecetaCreateWithoutUsuarioInput[] | receta_subrecetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: receta_subrecetaCreateOrConnectWithoutUsuarioInput | receta_subrecetaCreateOrConnectWithoutUsuarioInput[]
    upsert?: receta_subrecetaUpsertWithWhereUniqueWithoutUsuarioInput | receta_subrecetaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: receta_subrecetaCreateManyUsuarioInputEnvelope
    set?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    disconnect?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    delete?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    connect?: receta_subrecetaWhereUniqueInput | receta_subrecetaWhereUniqueInput[]
    update?: receta_subrecetaUpdateWithWhereUniqueWithoutUsuarioInput | receta_subrecetaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: receta_subrecetaUpdateManyWithWhereWithoutUsuarioInput | receta_subrecetaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: receta_subrecetaScalarWhereInput | receta_subrecetaScalarWhereInput[]
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
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ingrediente_baseCreateWithoutArticulo_proveedorInput = {
    aporta_a_base_panadera?: boolean | null
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutIngrediente_baseInput
  }

  export type ingrediente_baseUncheckedCreateWithoutArticulo_proveedorInput = {
    id_componente: number
    aporta_a_base_panadera?: boolean | null
  }

  export type ingrediente_baseCreateOrConnectWithoutArticulo_proveedorInput = {
    where: ingrediente_baseWhereUniqueInput
    create: XOR<ingrediente_baseCreateWithoutArticulo_proveedorInput, ingrediente_baseUncheckedCreateWithoutArticulo_proveedorInput>
  }

  export type proveedorCreateWithoutArticulo_proveedorInput = {
    nombre_proveedor: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type proveedorUncheckedCreateWithoutArticulo_proveedorInput = {
    id_proveedor?: number
    nombre_proveedor: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type proveedorCreateOrConnectWithoutArticulo_proveedorInput = {
    where: proveedorWhereUniqueInput
    create: XOR<proveedorCreateWithoutArticulo_proveedorInput, proveedorUncheckedCreateWithoutArticulo_proveedorInput>
  }

  export type detalle_formulacionCreateWithoutArticulo_proveedorInput = {
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutDetalle_formulacionInput
    receta_subreceta: receta_subrecetaCreateNestedOneWithoutDetalle_formulacionInput
  }

  export type detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput = {
    id_detalle?: number
    id_receta_padre: number
    id_componente_hijo: number
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionCreateOrConnectWithoutArticulo_proveedorInput = {
    where: detalle_formulacionWhereUniqueInput
    create: XOR<detalle_formulacionCreateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput>
  }

  export type detalle_formulacionCreateManyArticulo_proveedorInputEnvelope = {
    data: detalle_formulacionCreateManyArticulo_proveedorInput | detalle_formulacionCreateManyArticulo_proveedorInput[]
    skipDuplicates?: boolean
  }

  export type ingrediente_baseUpsertWithoutArticulo_proveedorInput = {
    update: XOR<ingrediente_baseUpdateWithoutArticulo_proveedorInput, ingrediente_baseUncheckedUpdateWithoutArticulo_proveedorInput>
    create: XOR<ingrediente_baseCreateWithoutArticulo_proveedorInput, ingrediente_baseUncheckedCreateWithoutArticulo_proveedorInput>
    where?: ingrediente_baseWhereInput
  }

  export type ingrediente_baseUpdateToOneWithWhereWithoutArticulo_proveedorInput = {
    where?: ingrediente_baseWhereInput
    data: XOR<ingrediente_baseUpdateWithoutArticulo_proveedorInput, ingrediente_baseUncheckedUpdateWithoutArticulo_proveedorInput>
  }

  export type ingrediente_baseUpdateWithoutArticulo_proveedorInput = {
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutIngrediente_baseNestedInput
  }

  export type ingrediente_baseUncheckedUpdateWithoutArticulo_proveedorInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type proveedorUpsertWithoutArticulo_proveedorInput = {
    update: XOR<proveedorUpdateWithoutArticulo_proveedorInput, proveedorUncheckedUpdateWithoutArticulo_proveedorInput>
    create: XOR<proveedorCreateWithoutArticulo_proveedorInput, proveedorUncheckedCreateWithoutArticulo_proveedorInput>
    where?: proveedorWhereInput
  }

  export type proveedorUpdateToOneWithWhereWithoutArticulo_proveedorInput = {
    where?: proveedorWhereInput
    data: XOR<proveedorUpdateWithoutArticulo_proveedorInput, proveedorUncheckedUpdateWithoutArticulo_proveedorInput>
  }

  export type proveedorUpdateWithoutArticulo_proveedorInput = {
    nombre_proveedor?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proveedorUncheckedUpdateWithoutArticulo_proveedorInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombre_proveedor?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_formulacionUpsertWithWhereUniqueWithoutArticulo_proveedorInput = {
    where: detalle_formulacionWhereUniqueInput
    update: XOR<detalle_formulacionUpdateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedUpdateWithoutArticulo_proveedorInput>
    create: XOR<detalle_formulacionCreateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedCreateWithoutArticulo_proveedorInput>
  }

  export type detalle_formulacionUpdateWithWhereUniqueWithoutArticulo_proveedorInput = {
    where: detalle_formulacionWhereUniqueInput
    data: XOR<detalle_formulacionUpdateWithoutArticulo_proveedorInput, detalle_formulacionUncheckedUpdateWithoutArticulo_proveedorInput>
  }

  export type detalle_formulacionUpdateManyWithWhereWithoutArticulo_proveedorInput = {
    where: detalle_formulacionScalarWhereInput
    data: XOR<detalle_formulacionUpdateManyMutationInput, detalle_formulacionUncheckedUpdateManyWithoutArticulo_proveedorInput>
  }

  export type detalle_formulacionScalarWhereInput = {
    AND?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
    OR?: detalle_formulacionScalarWhereInput[]
    NOT?: detalle_formulacionScalarWhereInput | detalle_formulacionScalarWhereInput[]
    id_detalle?: IntFilter<"detalle_formulacion"> | number
    id_receta_padre?: IntFilter<"detalle_formulacion"> | number
    id_componente_hijo?: IntFilter<"detalle_formulacion"> | number
    id_articulo_especifico?: IntNullableFilter<"detalle_formulacion"> | number | null
    cantidad_usada?: DecimalFilter<"detalle_formulacion"> | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFilter<"detalle_formulacion"> | string
    nota_preparacion?: StringNullableFilter<"detalle_formulacion"> | string | null
  }

  export type detalle_formulacionCreateWithoutCatalogo_componenteInput = {
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
    articulo_proveedor?: articulo_proveedorCreateNestedOneWithoutDetalle_formulacionInput
    receta_subreceta: receta_subrecetaCreateNestedOneWithoutDetalle_formulacionInput
  }

  export type detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput = {
    id_detalle?: number
    id_receta_padre: number
    id_articulo_especifico?: number | null
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionCreateOrConnectWithoutCatalogo_componenteInput = {
    where: detalle_formulacionWhereUniqueInput
    create: XOR<detalle_formulacionCreateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput>
  }

  export type detalle_formulacionCreateManyCatalogo_componenteInputEnvelope = {
    data: detalle_formulacionCreateManyCatalogo_componenteInput | detalle_formulacionCreateManyCatalogo_componenteInput[]
    skipDuplicates?: boolean
  }

  export type ingrediente_baseCreateWithoutCatalogo_componenteInput = {
    aporta_a_base_panadera?: boolean | null
    articulo_proveedor?: articulo_proveedorCreateNestedManyWithoutIngrediente_baseInput
  }

  export type ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput = {
    aporta_a_base_panadera?: boolean | null
    articulo_proveedor?: articulo_proveedorUncheckedCreateNestedManyWithoutIngrediente_baseInput
  }

  export type ingrediente_baseCreateOrConnectWithoutCatalogo_componenteInput = {
    where: ingrediente_baseWhereUniqueInput
    create: XOR<ingrediente_baseCreateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput>
  }

  export type receta_subrecetaCreateWithoutCatalogo_componenteInput = {
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutReceta_subrecetaInput
    usuario?: usuarioCreateNestedOneWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput = {
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_por?: number | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaCreateOrConnectWithoutCatalogo_componenteInput = {
    where: receta_subrecetaWhereUniqueInput
    create: XOR<receta_subrecetaCreateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput>
  }

  export type servicio_costoCreateWithoutCatalogo_componenteInput = {
    costo_por_unidad_medida: Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoUncheckedCreateWithoutCatalogo_componenteInput = {
    costo_por_unidad_medida: Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoCreateOrConnectWithoutCatalogo_componenteInput = {
    where: servicio_costoWhereUniqueInput
    create: XOR<servicio_costoCreateWithoutCatalogo_componenteInput, servicio_costoUncheckedCreateWithoutCatalogo_componenteInput>
  }

  export type detalle_formulacionUpsertWithWhereUniqueWithoutCatalogo_componenteInput = {
    where: detalle_formulacionWhereUniqueInput
    update: XOR<detalle_formulacionUpdateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedUpdateWithoutCatalogo_componenteInput>
    create: XOR<detalle_formulacionCreateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedCreateWithoutCatalogo_componenteInput>
  }

  export type detalle_formulacionUpdateWithWhereUniqueWithoutCatalogo_componenteInput = {
    where: detalle_formulacionWhereUniqueInput
    data: XOR<detalle_formulacionUpdateWithoutCatalogo_componenteInput, detalle_formulacionUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type detalle_formulacionUpdateManyWithWhereWithoutCatalogo_componenteInput = {
    where: detalle_formulacionScalarWhereInput
    data: XOR<detalle_formulacionUpdateManyMutationInput, detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteInput>
  }

  export type ingrediente_baseUpsertWithoutCatalogo_componenteInput = {
    update: XOR<ingrediente_baseUpdateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedUpdateWithoutCatalogo_componenteInput>
    create: XOR<ingrediente_baseCreateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedCreateWithoutCatalogo_componenteInput>
    where?: ingrediente_baseWhereInput
  }

  export type ingrediente_baseUpdateToOneWithWhereWithoutCatalogo_componenteInput = {
    where?: ingrediente_baseWhereInput
    data: XOR<ingrediente_baseUpdateWithoutCatalogo_componenteInput, ingrediente_baseUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type ingrediente_baseUpdateWithoutCatalogo_componenteInput = {
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
    articulo_proveedor?: articulo_proveedorUpdateManyWithoutIngrediente_baseNestedInput
  }

  export type ingrediente_baseUncheckedUpdateWithoutCatalogo_componenteInput = {
    aporta_a_base_panadera?: NullableBoolFieldUpdateOperationsInput | boolean | null
    articulo_proveedor?: articulo_proveedorUncheckedUpdateManyWithoutIngrediente_baseNestedInput
  }

  export type receta_subrecetaUpsertWithoutCatalogo_componenteInput = {
    update: XOR<receta_subrecetaUpdateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedUpdateWithoutCatalogo_componenteInput>
    create: XOR<receta_subrecetaCreateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedCreateWithoutCatalogo_componenteInput>
    where?: receta_subrecetaWhereInput
  }

  export type receta_subrecetaUpdateToOneWithWhereWithoutCatalogo_componenteInput = {
    where?: receta_subrecetaWhereInput
    data: XOR<receta_subrecetaUpdateWithoutCatalogo_componenteInput, receta_subrecetaUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type receta_subrecetaUpdateWithoutCatalogo_componenteInput = {
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutReceta_subrecetaNestedInput
    usuario?: usuarioUpdateOneWithoutReceta_subrecetaNestedInput
  }

  export type receta_subrecetaUncheckedUpdateWithoutCatalogo_componenteInput = {
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_por?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutReceta_subrecetaNestedInput
  }

  export type servicio_costoUpsertWithoutCatalogo_componenteInput = {
    update: XOR<servicio_costoUpdateWithoutCatalogo_componenteInput, servicio_costoUncheckedUpdateWithoutCatalogo_componenteInput>
    create: XOR<servicio_costoCreateWithoutCatalogo_componenteInput, servicio_costoUncheckedCreateWithoutCatalogo_componenteInput>
    where?: servicio_costoWhereInput
  }

  export type servicio_costoUpdateToOneWithWhereWithoutCatalogo_componenteInput = {
    where?: servicio_costoWhereInput
    data: XOR<servicio_costoUpdateWithoutCatalogo_componenteInput, servicio_costoUncheckedUpdateWithoutCatalogo_componenteInput>
  }

  export type servicio_costoUpdateWithoutCatalogo_componenteInput = {
    costo_por_unidad_medida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type servicio_costoUncheckedUpdateWithoutCatalogo_componenteInput = {
    costo_por_unidad_medida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type articulo_proveedorCreateWithoutDetalle_formulacionInput = {
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    ingrediente_base: ingrediente_baseCreateNestedOneWithoutArticulo_proveedorInput
    proveedor: proveedorCreateNestedOneWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorUncheckedCreateWithoutDetalle_formulacionInput = {
    id_articulo?: number
    id_componente: number
    id_proveedor: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
  }

  export type articulo_proveedorCreateOrConnectWithoutDetalle_formulacionInput = {
    where: articulo_proveedorWhereUniqueInput
    create: XOR<articulo_proveedorCreateWithoutDetalle_formulacionInput, articulo_proveedorUncheckedCreateWithoutDetalle_formulacionInput>
  }

  export type catalogo_componenteCreateWithoutDetalle_formulacionInput = {
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    ingrediente_base?: ingrediente_baseCreateNestedOneWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteUncheckedCreateWithoutDetalle_formulacionInput = {
    id_componente?: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    ingrediente_base?: ingrediente_baseUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoUncheckedCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteCreateOrConnectWithoutDetalle_formulacionInput = {
    where: catalogo_componenteWhereUniqueInput
    create: XOR<catalogo_componenteCreateWithoutDetalle_formulacionInput, catalogo_componenteUncheckedCreateWithoutDetalle_formulacionInput>
  }

  export type receta_subrecetaCreateWithoutDetalle_formulacionInput = {
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    usuario?: usuarioCreateNestedOneWithoutReceta_subrecetaInput
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaUncheckedCreateWithoutDetalle_formulacionInput = {
    id_componente: number
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_por?: number | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
  }

  export type receta_subrecetaCreateOrConnectWithoutDetalle_formulacionInput = {
    where: receta_subrecetaWhereUniqueInput
    create: XOR<receta_subrecetaCreateWithoutDetalle_formulacionInput, receta_subrecetaUncheckedCreateWithoutDetalle_formulacionInput>
  }

  export type articulo_proveedorUpsertWithoutDetalle_formulacionInput = {
    update: XOR<articulo_proveedorUpdateWithoutDetalle_formulacionInput, articulo_proveedorUncheckedUpdateWithoutDetalle_formulacionInput>
    create: XOR<articulo_proveedorCreateWithoutDetalle_formulacionInput, articulo_proveedorUncheckedCreateWithoutDetalle_formulacionInput>
    where?: articulo_proveedorWhereInput
  }

  export type articulo_proveedorUpdateToOneWithWhereWithoutDetalle_formulacionInput = {
    where?: articulo_proveedorWhereInput
    data: XOR<articulo_proveedorUpdateWithoutDetalle_formulacionInput, articulo_proveedorUncheckedUpdateWithoutDetalle_formulacionInput>
  }

  export type articulo_proveedorUpdateWithoutDetalle_formulacionInput = {
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingrediente_base?: ingrediente_baseUpdateOneRequiredWithoutArticulo_proveedorNestedInput
    proveedor?: proveedorUpdateOneRequiredWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorUncheckedUpdateWithoutDetalle_formulacionInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_componente?: IntFieldUpdateOperationsInput | number
    id_proveedor?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type catalogo_componenteUpsertWithoutDetalle_formulacionInput = {
    update: XOR<catalogo_componenteUpdateWithoutDetalle_formulacionInput, catalogo_componenteUncheckedUpdateWithoutDetalle_formulacionInput>
    create: XOR<catalogo_componenteCreateWithoutDetalle_formulacionInput, catalogo_componenteUncheckedCreateWithoutDetalle_formulacionInput>
    where?: catalogo_componenteWhereInput
  }

  export type catalogo_componenteUpdateToOneWithWhereWithoutDetalle_formulacionInput = {
    where?: catalogo_componenteWhereInput
    data: XOR<catalogo_componenteUpdateWithoutDetalle_formulacionInput, catalogo_componenteUncheckedUpdateWithoutDetalle_formulacionInput>
  }

  export type catalogo_componenteUpdateWithoutDetalle_formulacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ingrediente_base?: ingrediente_baseUpdateOneWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type catalogo_componenteUncheckedUpdateWithoutDetalle_formulacionInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ingrediente_base?: ingrediente_baseUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type receta_subrecetaUpsertWithoutDetalle_formulacionInput = {
    update: XOR<receta_subrecetaUpdateWithoutDetalle_formulacionInput, receta_subrecetaUncheckedUpdateWithoutDetalle_formulacionInput>
    create: XOR<receta_subrecetaCreateWithoutDetalle_formulacionInput, receta_subrecetaUncheckedCreateWithoutDetalle_formulacionInput>
    where?: receta_subrecetaWhereInput
  }

  export type receta_subrecetaUpdateToOneWithWhereWithoutDetalle_formulacionInput = {
    where?: receta_subrecetaWhereInput
    data: XOR<receta_subrecetaUpdateWithoutDetalle_formulacionInput, receta_subrecetaUncheckedUpdateWithoutDetalle_formulacionInput>
  }

  export type receta_subrecetaUpdateWithoutDetalle_formulacionInput = {
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneWithoutReceta_subrecetaNestedInput
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutReceta_subrecetaNestedInput
  }

  export type receta_subrecetaUncheckedUpdateWithoutDetalle_formulacionInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_por?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articulo_proveedorCreateWithoutIngrediente_baseInput = {
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    proveedor: proveedorCreateNestedOneWithoutArticulo_proveedorInput
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput = {
    id_articulo?: number
    id_proveedor: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorCreateOrConnectWithoutIngrediente_baseInput = {
    where: articulo_proveedorWhereUniqueInput
    create: XOR<articulo_proveedorCreateWithoutIngrediente_baseInput, articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput>
  }

  export type articulo_proveedorCreateManyIngrediente_baseInputEnvelope = {
    data: articulo_proveedorCreateManyIngrediente_baseInput | articulo_proveedorCreateManyIngrediente_baseInput[]
    skipDuplicates?: boolean
  }

  export type catalogo_componenteCreateWithoutIngrediente_baseInput = {
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteUncheckedCreateWithoutIngrediente_baseInput = {
    id_componente?: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoUncheckedCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteCreateOrConnectWithoutIngrediente_baseInput = {
    where: catalogo_componenteWhereUniqueInput
    create: XOR<catalogo_componenteCreateWithoutIngrediente_baseInput, catalogo_componenteUncheckedCreateWithoutIngrediente_baseInput>
  }

  export type articulo_proveedorUpsertWithWhereUniqueWithoutIngrediente_baseInput = {
    where: articulo_proveedorWhereUniqueInput
    update: XOR<articulo_proveedorUpdateWithoutIngrediente_baseInput, articulo_proveedorUncheckedUpdateWithoutIngrediente_baseInput>
    create: XOR<articulo_proveedorCreateWithoutIngrediente_baseInput, articulo_proveedorUncheckedCreateWithoutIngrediente_baseInput>
  }

  export type articulo_proveedorUpdateWithWhereUniqueWithoutIngrediente_baseInput = {
    where: articulo_proveedorWhereUniqueInput
    data: XOR<articulo_proveedorUpdateWithoutIngrediente_baseInput, articulo_proveedorUncheckedUpdateWithoutIngrediente_baseInput>
  }

  export type articulo_proveedorUpdateManyWithWhereWithoutIngrediente_baseInput = {
    where: articulo_proveedorScalarWhereInput
    data: XOR<articulo_proveedorUpdateManyMutationInput, articulo_proveedorUncheckedUpdateManyWithoutIngrediente_baseInput>
  }

  export type articulo_proveedorScalarWhereInput = {
    AND?: articulo_proveedorScalarWhereInput | articulo_proveedorScalarWhereInput[]
    OR?: articulo_proveedorScalarWhereInput[]
    NOT?: articulo_proveedorScalarWhereInput | articulo_proveedorScalarWhereInput[]
    id_articulo?: IntFilter<"articulo_proveedor"> | number
    id_componente?: IntFilter<"articulo_proveedor"> | number
    id_proveedor?: IntFilter<"articulo_proveedor"> | number
    marca_descripcion?: StringNullableFilter<"articulo_proveedor"> | string | null
    costo_por_unidad?: DecimalFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: DecimalNullableFilter<"articulo_proveedor"> | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: BoolNullableFilter<"articulo_proveedor"> | boolean | null
    creado_en?: DateTimeNullableFilter<"articulo_proveedor"> | Date | string | null
  }

  export type catalogo_componenteUpsertWithoutIngrediente_baseInput = {
    update: XOR<catalogo_componenteUpdateWithoutIngrediente_baseInput, catalogo_componenteUncheckedUpdateWithoutIngrediente_baseInput>
    create: XOR<catalogo_componenteCreateWithoutIngrediente_baseInput, catalogo_componenteUncheckedCreateWithoutIngrediente_baseInput>
    where?: catalogo_componenteWhereInput
  }

  export type catalogo_componenteUpdateToOneWithWhereWithoutIngrediente_baseInput = {
    where?: catalogo_componenteWhereInput
    data: XOR<catalogo_componenteUpdateWithoutIngrediente_baseInput, catalogo_componenteUncheckedUpdateWithoutIngrediente_baseInput>
  }

  export type catalogo_componenteUpdateWithoutIngrediente_baseInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type catalogo_componenteUncheckedUpdateWithoutIngrediente_baseInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type articulo_proveedorCreateWithoutProveedorInput = {
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    ingrediente_base: ingrediente_baseCreateNestedOneWithoutArticulo_proveedorInput
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorUncheckedCreateWithoutProveedorInput = {
    id_articulo?: number
    id_componente: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutArticulo_proveedorInput
  }

  export type articulo_proveedorCreateOrConnectWithoutProveedorInput = {
    where: articulo_proveedorWhereUniqueInput
    create: XOR<articulo_proveedorCreateWithoutProveedorInput, articulo_proveedorUncheckedCreateWithoutProveedorInput>
  }

  export type articulo_proveedorCreateManyProveedorInputEnvelope = {
    data: articulo_proveedorCreateManyProveedorInput | articulo_proveedorCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type articulo_proveedorUpsertWithWhereUniqueWithoutProveedorInput = {
    where: articulo_proveedorWhereUniqueInput
    update: XOR<articulo_proveedorUpdateWithoutProveedorInput, articulo_proveedorUncheckedUpdateWithoutProveedorInput>
    create: XOR<articulo_proveedorCreateWithoutProveedorInput, articulo_proveedorUncheckedCreateWithoutProveedorInput>
  }

  export type articulo_proveedorUpdateWithWhereUniqueWithoutProveedorInput = {
    where: articulo_proveedorWhereUniqueInput
    data: XOR<articulo_proveedorUpdateWithoutProveedorInput, articulo_proveedorUncheckedUpdateWithoutProveedorInput>
  }

  export type articulo_proveedorUpdateManyWithWhereWithoutProveedorInput = {
    where: articulo_proveedorScalarWhereInput
    data: XOR<articulo_proveedorUpdateManyMutationInput, articulo_proveedorUncheckedUpdateManyWithoutProveedorInput>
  }

  export type detalle_formulacionCreateWithoutReceta_subrecetaInput = {
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
    articulo_proveedor?: articulo_proveedorCreateNestedOneWithoutDetalle_formulacionInput
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutDetalle_formulacionInput
  }

  export type detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput = {
    id_detalle?: number
    id_componente_hijo: number
    id_articulo_especifico?: number | null
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionCreateOrConnectWithoutReceta_subrecetaInput = {
    where: detalle_formulacionWhereUniqueInput
    create: XOR<detalle_formulacionCreateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput>
  }

  export type detalle_formulacionCreateManyReceta_subrecetaInputEnvelope = {
    data: detalle_formulacionCreateManyReceta_subrecetaInput | detalle_formulacionCreateManyReceta_subrecetaInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutReceta_subrecetaInput = {
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    activo?: boolean | null
    rol: rolCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutReceta_subrecetaInput = {
    id_usuario?: number
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    id_rol: number
    activo?: boolean | null
  }

  export type usuarioCreateOrConnectWithoutReceta_subrecetaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutReceta_subrecetaInput, usuarioUncheckedCreateWithoutReceta_subrecetaInput>
  }

  export type catalogo_componenteCreateWithoutReceta_subrecetaInput = {
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutCatalogo_componenteInput
    ingrediente_base?: ingrediente_baseCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteUncheckedCreateWithoutReceta_subrecetaInput = {
    id_componente?: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutCatalogo_componenteInput
    ingrediente_base?: ingrediente_baseUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    servicio_costo?: servicio_costoUncheckedCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteCreateOrConnectWithoutReceta_subrecetaInput = {
    where: catalogo_componenteWhereUniqueInput
    create: XOR<catalogo_componenteCreateWithoutReceta_subrecetaInput, catalogo_componenteUncheckedCreateWithoutReceta_subrecetaInput>
  }

  export type detalle_formulacionUpsertWithWhereUniqueWithoutReceta_subrecetaInput = {
    where: detalle_formulacionWhereUniqueInput
    update: XOR<detalle_formulacionUpdateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedUpdateWithoutReceta_subrecetaInput>
    create: XOR<detalle_formulacionCreateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedCreateWithoutReceta_subrecetaInput>
  }

  export type detalle_formulacionUpdateWithWhereUniqueWithoutReceta_subrecetaInput = {
    where: detalle_formulacionWhereUniqueInput
    data: XOR<detalle_formulacionUpdateWithoutReceta_subrecetaInput, detalle_formulacionUncheckedUpdateWithoutReceta_subrecetaInput>
  }

  export type detalle_formulacionUpdateManyWithWhereWithoutReceta_subrecetaInput = {
    where: detalle_formulacionScalarWhereInput
    data: XOR<detalle_formulacionUpdateManyMutationInput, detalle_formulacionUncheckedUpdateManyWithoutReceta_subrecetaInput>
  }

  export type usuarioUpsertWithoutReceta_subrecetaInput = {
    update: XOR<usuarioUpdateWithoutReceta_subrecetaInput, usuarioUncheckedUpdateWithoutReceta_subrecetaInput>
    create: XOR<usuarioCreateWithoutReceta_subrecetaInput, usuarioUncheckedCreateWithoutReceta_subrecetaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutReceta_subrecetaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutReceta_subrecetaInput, usuarioUncheckedUpdateWithoutReceta_subrecetaInput>
  }

  export type usuarioUpdateWithoutReceta_subrecetaInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rol?: rolUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutReceta_subrecetaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_rol?: IntFieldUpdateOperationsInput | number
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type catalogo_componenteUpsertWithoutReceta_subrecetaInput = {
    update: XOR<catalogo_componenteUpdateWithoutReceta_subrecetaInput, catalogo_componenteUncheckedUpdateWithoutReceta_subrecetaInput>
    create: XOR<catalogo_componenteCreateWithoutReceta_subrecetaInput, catalogo_componenteUncheckedCreateWithoutReceta_subrecetaInput>
    where?: catalogo_componenteWhereInput
  }

  export type catalogo_componenteUpdateToOneWithWhereWithoutReceta_subrecetaInput = {
    where?: catalogo_componenteWhereInput
    data: XOR<catalogo_componenteUpdateWithoutReceta_subrecetaInput, catalogo_componenteUncheckedUpdateWithoutReceta_subrecetaInput>
  }

  export type catalogo_componenteUpdateWithoutReceta_subrecetaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutCatalogo_componenteNestedInput
    ingrediente_base?: ingrediente_baseUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type catalogo_componenteUncheckedUpdateWithoutReceta_subrecetaInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteNestedInput
    ingrediente_base?: ingrediente_baseUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    servicio_costo?: servicio_costoUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type usuarioCreateWithoutRolInput = {
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    activo?: boolean | null
    receta_subreceta?: receta_subrecetaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutRolInput = {
    id_usuario?: number
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    activo?: boolean | null
    receta_subreceta?: receta_subrecetaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutRolInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput>
  }

  export type usuarioCreateManyRolInputEnvelope = {
    data: usuarioCreateManyRolInput | usuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutRolInput, usuarioUncheckedUpdateWithoutRolInput>
    create: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutRolInput, usuarioUncheckedUpdateWithoutRolInput>
  }

  export type usuarioUpdateManyWithWhereWithoutRolInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre_usuario?: StringFilter<"usuario"> | string
    apellido_usuario?: StringNullableFilter<"usuario"> | string | null
    email?: StringNullableFilter<"usuario"> | string | null
    id_rol?: IntFilter<"usuario"> | number
    activo?: BoolNullableFilter<"usuario"> | boolean | null
  }

  export type catalogo_componenteCreateWithoutServicio_costoInput = {
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutCatalogo_componenteInput
    ingrediente_base?: ingrediente_baseCreateNestedOneWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteUncheckedCreateWithoutServicio_costoInput = {
    id_componente?: number
    nombre: string
    tipo_componente: string
    unidad_medida: string
    activo?: boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutCatalogo_componenteInput
    ingrediente_base?: ingrediente_baseUncheckedCreateNestedOneWithoutCatalogo_componenteInput
    receta_subreceta?: receta_subrecetaUncheckedCreateNestedOneWithoutCatalogo_componenteInput
  }

  export type catalogo_componenteCreateOrConnectWithoutServicio_costoInput = {
    where: catalogo_componenteWhereUniqueInput
    create: XOR<catalogo_componenteCreateWithoutServicio_costoInput, catalogo_componenteUncheckedCreateWithoutServicio_costoInput>
  }

  export type catalogo_componenteUpsertWithoutServicio_costoInput = {
    update: XOR<catalogo_componenteUpdateWithoutServicio_costoInput, catalogo_componenteUncheckedUpdateWithoutServicio_costoInput>
    create: XOR<catalogo_componenteCreateWithoutServicio_costoInput, catalogo_componenteUncheckedCreateWithoutServicio_costoInput>
    where?: catalogo_componenteWhereInput
  }

  export type catalogo_componenteUpdateToOneWithWhereWithoutServicio_costoInput = {
    where?: catalogo_componenteWhereInput
    data: XOR<catalogo_componenteUpdateWithoutServicio_costoInput, catalogo_componenteUncheckedUpdateWithoutServicio_costoInput>
  }

  export type catalogo_componenteUpdateWithoutServicio_costoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutCatalogo_componenteNestedInput
    ingrediente_base?: ingrediente_baseUpdateOneWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type catalogo_componenteUncheckedUpdateWithoutServicio_costoInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_componente?: StringFieldUpdateOperationsInput | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteNestedInput
    ingrediente_base?: ingrediente_baseUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
    receta_subreceta?: receta_subrecetaUncheckedUpdateOneWithoutCatalogo_componenteNestedInput
  }

  export type receta_subrecetaCreateWithoutUsuarioInput = {
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionCreateNestedManyWithoutReceta_subrecetaInput
    catalogo_componente: catalogo_componenteCreateNestedOneWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaUncheckedCreateWithoutUsuarioInput = {
    id_componente: number
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedCreateNestedManyWithoutReceta_subrecetaInput
  }

  export type receta_subrecetaCreateOrConnectWithoutUsuarioInput = {
    where: receta_subrecetaWhereUniqueInput
    create: XOR<receta_subrecetaCreateWithoutUsuarioInput, receta_subrecetaUncheckedCreateWithoutUsuarioInput>
  }

  export type receta_subrecetaCreateManyUsuarioInputEnvelope = {
    data: receta_subrecetaCreateManyUsuarioInput | receta_subrecetaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type rolCreateWithoutUsuarioInput = {
    nombre_rol: string
  }

  export type rolUncheckedCreateWithoutUsuarioInput = {
    id_rol?: number
    nombre_rol: string
  }

  export type rolCreateOrConnectWithoutUsuarioInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutUsuarioInput, rolUncheckedCreateWithoutUsuarioInput>
  }

  export type receta_subrecetaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: receta_subrecetaWhereUniqueInput
    update: XOR<receta_subrecetaUpdateWithoutUsuarioInput, receta_subrecetaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<receta_subrecetaCreateWithoutUsuarioInput, receta_subrecetaUncheckedCreateWithoutUsuarioInput>
  }

  export type receta_subrecetaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: receta_subrecetaWhereUniqueInput
    data: XOR<receta_subrecetaUpdateWithoutUsuarioInput, receta_subrecetaUncheckedUpdateWithoutUsuarioInput>
  }

  export type receta_subrecetaUpdateManyWithWhereWithoutUsuarioInput = {
    where: receta_subrecetaScalarWhereInput
    data: XOR<receta_subrecetaUpdateManyMutationInput, receta_subrecetaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type receta_subrecetaScalarWhereInput = {
    AND?: receta_subrecetaScalarWhereInput | receta_subrecetaScalarWhereInput[]
    OR?: receta_subrecetaScalarWhereInput[]
    NOT?: receta_subrecetaScalarWhereInput | receta_subrecetaScalarWhereInput[]
    id_componente?: IntFilter<"receta_subreceta"> | number
    ppu_objetivo?: DecimalNullableFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: IntNullableFilter<"receta_subreceta"> | number | null
    porcentaje_merma_coccion?: DecimalNullableFilter<"receta_subreceta"> | Decimal | DecimalJsLike | number | string | null
    creado_por?: IntNullableFilter<"receta_subreceta"> | number | null
    creado_en?: DateTimeNullableFilter<"receta_subreceta"> | Date | string | null
    actualizado_en?: DateTimeNullableFilter<"receta_subreceta"> | Date | string | null
  }

  export type rolUpsertWithoutUsuarioInput = {
    update: XOR<rolUpdateWithoutUsuarioInput, rolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<rolCreateWithoutUsuarioInput, rolUncheckedCreateWithoutUsuarioInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutUsuarioInput, rolUncheckedUpdateWithoutUsuarioInput>
  }

  export type rolUpdateWithoutUsuarioInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateWithoutUsuarioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type detalle_formulacionCreateManyArticulo_proveedorInput = {
    id_detalle?: number
    id_receta_padre: number
    id_componente_hijo: number
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionUpdateWithoutArticulo_proveedorInput = {
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutDetalle_formulacionNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneRequiredWithoutDetalle_formulacionNestedInput
  }

  export type detalle_formulacionUncheckedUpdateWithoutArticulo_proveedorInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta_padre?: IntFieldUpdateOperationsInput | number
    id_componente_hijo?: IntFieldUpdateOperationsInput | number
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_formulacionUncheckedUpdateManyWithoutArticulo_proveedorInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta_padre?: IntFieldUpdateOperationsInput | number
    id_componente_hijo?: IntFieldUpdateOperationsInput | number
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_formulacionCreateManyCatalogo_componenteInput = {
    id_detalle?: number
    id_receta_padre: number
    id_articulo_especifico?: number | null
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionUpdateWithoutCatalogo_componenteInput = {
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
    articulo_proveedor?: articulo_proveedorUpdateOneWithoutDetalle_formulacionNestedInput
    receta_subreceta?: receta_subrecetaUpdateOneRequiredWithoutDetalle_formulacionNestedInput
  }

  export type detalle_formulacionUncheckedUpdateWithoutCatalogo_componenteInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta_padre?: IntFieldUpdateOperationsInput | number
    id_articulo_especifico?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_formulacionUncheckedUpdateManyWithoutCatalogo_componenteInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta_padre?: IntFieldUpdateOperationsInput | number
    id_articulo_especifico?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type articulo_proveedorCreateManyIngrediente_baseInput = {
    id_articulo?: number
    id_proveedor: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
  }

  export type articulo_proveedorUpdateWithoutIngrediente_baseInput = {
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proveedor?: proveedorUpdateOneRequiredWithoutArticulo_proveedorNestedInput
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorUncheckedUpdateWithoutIngrediente_baseInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_proveedor?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorUncheckedUpdateManyWithoutIngrediente_baseInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_proveedor?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articulo_proveedorCreateManyProveedorInput = {
    id_articulo?: number
    id_componente: number
    marca_descripcion?: string | null
    costo_por_unidad: Decimal | DecimalJsLike | number | string
    porcentaje_agua?: Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: boolean | null
    creado_en?: Date | string | null
  }

  export type articulo_proveedorUpdateWithoutProveedorInput = {
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingrediente_base?: ingrediente_baseUpdateOneRequiredWithoutArticulo_proveedorNestedInput
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorUncheckedUpdateWithoutProveedorInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_componente?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutArticulo_proveedorNestedInput
  }

  export type articulo_proveedorUncheckedUpdateManyWithoutProveedorInput = {
    id_articulo?: IntFieldUpdateOperationsInput | number
    id_componente?: IntFieldUpdateOperationsInput | number
    marca_descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    costo_por_unidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentaje_agua?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_grasa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    porcentaje_merma_limpieza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    es_predeterminado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_formulacionCreateManyReceta_subrecetaInput = {
    id_detalle?: number
    id_componente_hijo: number
    id_articulo_especifico?: number | null
    cantidad_usada: Decimal | DecimalJsLike | number | string
    unidad_medida_usada: string
    nota_preparacion?: string | null
  }

  export type detalle_formulacionUpdateWithoutReceta_subrecetaInput = {
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
    articulo_proveedor?: articulo_proveedorUpdateOneWithoutDetalle_formulacionNestedInput
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutDetalle_formulacionNestedInput
  }

  export type detalle_formulacionUncheckedUpdateWithoutReceta_subrecetaInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_componente_hijo?: IntFieldUpdateOperationsInput | number
    id_articulo_especifico?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_formulacionUncheckedUpdateManyWithoutReceta_subrecetaInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_componente_hijo?: IntFieldUpdateOperationsInput | number
    id_articulo_especifico?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad_usada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida_usada?: StringFieldUpdateOperationsInput | string
    nota_preparacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateManyRolInput = {
    id_usuario?: number
    nombre_usuario: string
    apellido_usuario?: string | null
    email?: string | null
    activo?: boolean | null
  }

  export type usuarioUpdateWithoutRolInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    receta_subreceta?: receta_subrecetaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    receta_subreceta?: receta_subrecetaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    apellido_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type receta_subrecetaCreateManyUsuarioInput = {
    id_componente: number
    ppu_objetivo?: Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: number | null
    porcentaje_merma_coccion?: Decimal | DecimalJsLike | number | string | null
    creado_en?: Date | string | null
    actualizado_en?: Date | string | null
  }

  export type receta_subrecetaUpdateWithoutUsuarioInput = {
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUpdateManyWithoutReceta_subrecetaNestedInput
    catalogo_componente?: catalogo_componenteUpdateOneRequiredWithoutReceta_subrecetaNestedInput
  }

  export type receta_subrecetaUncheckedUpdateWithoutUsuarioInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_formulacion?: detalle_formulacionUncheckedUpdateManyWithoutReceta_subrecetaNestedInput
  }

  export type receta_subrecetaUncheckedUpdateManyWithoutUsuarioInput = {
    id_componente?: IntFieldUpdateOperationsInput | number
    ppu_objetivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidades_tanda?: NullableIntFieldUpdateOperationsInput | number | null
    porcentaje_merma_coccion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualizado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
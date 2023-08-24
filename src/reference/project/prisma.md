# Prisma

```prisma
datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_URL")
}

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native"]
}

/// 用户
model User {
  /// ID
  id                  Int       @id @default(autoincrement())
  /// 用户名
  username            String    @unique @db.VarChar(50)
  /// 密码
  password            String    @db.VarChar(255)
  /// 邮箱
  email               String?   @unique @db.VarChar(50)
  /// 手机号
  phoneNumber         String?   @map("phone_number") @db.VarChar(25)
  /// 姓名
  name                String?   @db.VarChar(30)
  /// 名
  firstName           String?   @map("first_name") @db.VarChar(30)
  /// 中间名
  middleName          String?   @map("middle_name") @db.VarChar(30)
  /// 姓
  lastName            String?   @map("last_name") @db.VarChar(30)
  /// 昵称
  nickName            String?   @map("nick_name") @db.VarChar(50)
  /// 头像
  avatarUrl           String?   @map("avatar_url") @db.VarChar(1000)
  /// 性别：数据字典
  gender              String?   @db.VarChar(255)
  /// 国家
  country             String?   @db.VarChar(50)
  /// 省份
  province            String?   @db.VarChar(50)
  /// 城市
  city                String?   @db.VarChar(50)
  /// 地址
  address             String?   @db.VarChar(1000)
  /// 个人简介
  biography           String?   @db.VarChar(2000)
  /// 个人网站
  website             String?   @db.VarChar(1000)
  /// 个人主页
  profile             String?   @db.VarChar(1000)
  /// 出生日期
  birthDate           DateTime? @map("birth_date") @db.Date
  /// 邮箱是否验证
  emailVerified       Boolean   @default(false) @map("email_verified")
  /// 手机号是否验证
  phoneNumberVerified Boolean   @default(false) @map("phone_number_verified")
  /// 是否启用
  enabled             Boolean   @default(true)
  /// 是否内置
  builtIn             Boolean   @default(false) @map("built_in")

  /// 认证
  auth   Auth?
  /// 认证 ID
  authId Int?  @map("auth_id")

  /// 用户 - 角色
  userRoles    UserRole[]
  /// 用户 - 访问记录
  userTraffics UserTraffic[]

  /// 创建时间
  createdAt DateTime? @default(now()) @map("created_at") @db.Timestamptz(3)
  /// 创建人
  createdBy Int?      @map("created_by")
  /// 更新时间
  updatedAt DateTime? @updatedAt @map("updated_at") @db.Timestamptz(3)
  /// 更新人
  updatedBy Int?      @map("updated_by")
  /// 删除时间
  deletedAt DateTime? @map("deleted_at") @db.Timestamptz(3)
  /// 删除人
  deletedBy Int?      @map("deleted_by")

  @@map("system_user")
}

/// 认证
model Auth {
  /// ID
  id        Int    @id @default(autoincrement())
  /// 认证类型：数据字典
  authType  Int    @map("auth_type")
  /// OpenID
  openId    String @map("open_id") @db.VarChar(255)
  /// Token
  authToken String @map("auth_token") @db.VarChar(255)
  /// 数据
  data      Json?  @db.Json

  /// 用户
  user   User @relation(fields: [userId], references: [id])
  /// 用户 ID
  userId Int  @unique @map("user_id")

  /// 创建时间
  createdAt DateTime? @default(now()) @map("created_at") @db.Timestamptz(3)
  /// 创建人
  createdBy Int?      @map("created_by")
  /// 更新时间
  updatedAt DateTime? @updatedAt @map("updated_at") @db.Timestamptz(3)
  /// 更新人
  updatedBy Int?      @map("updated_by")
  /// 删除时间
  deletedAt DateTime? @map("deleted_at") @db.Timestamptz(3)
  /// 删除人
  deletedBy Int?      @map("deleted_by")

  @@unique([authType, openId])
  @@map("system_auth")
}
```

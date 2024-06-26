import {
    IsNotEmpty,
    IsString,
    IsEmail,
    MinLength,
    IsEnum,
  } from "class-validator";
  // import { UserRole } from "./user.role.enum";
  
  export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    readonly firstname: string;
  
    @IsNotEmpty()
    @IsString()
    readonly lastname: string;

    @IsNotEmpty()
    @IsString()
    readonly location: string;
  
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
  
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, { message: "Please Enter a valid email address" })
    readonly email: string;
  
    // @IsNotEmpty()
    // @IsString()
    // @IsEnum(UserRole, { message: "Please Enter a valid role" })
    // readonly role: string;
  
    readonly address: {
      addr1: string;
      addr2?: string;
      city?: string;
      state?: string;
      country?: string;
      zip?: string;
    };
  
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
    
  }
  
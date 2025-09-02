import { getUserFromCookie } from "@/Helper/helper";
import prismaClient from "@/service/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   
    const body = await req.json();
    const user = await getUserFromCookie();
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "User not found"
        })
    }
    const existingCompany = await prismaClient.company.findUnique({
  where: { ownerId: user.id },
});

if (existingCompany) {
  return NextResponse.json({
    success: false,
    message: "You already have a company registered",
  });
}
    const obj = {
        name: body.name ,
        description: body.description ,
        ownerId: user.id,
    }
    try {
        const newCompany = await prismaClient.company.create({
            data: obj,
        })
        if (newCompany) {
            return NextResponse.json({
                success: true,
                message: "Company Registered Successfully",
                data: newCompany
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Company Registered Unsuccessfully",

            })

        }
    }
    catch(err:any){
        console.log(err);
        return NextResponse.json({
            success:false,
            message:err
        })
    }

    
    
}
import { getUserFromCookie } from "@/Helper/helper";
import prismaClient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const {id} = await params;
        console.log("id aa rhi h", id);

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Missing company ID in params.",
            }, { status: 400 });
        }

        const company = await prismaClient.company.findUnique({
            where: { id },
            include:{
                jobs:true,
                review:{
                    include:{
                        user:true
                    }
                }
            }
        });

        if (!company) {
            return NextResponse.json({
                success: false,
                message: "Company not found!",
            }, { status: 404 });
        }

        const owner = await prismaClient.user.findUnique({
            where: { id: company.ownerId },
        });

        return NextResponse.json({
            success: true,
            data: {
                company,
                owner,
            },
        });

    } catch (error: any) {
        console.error("GET /api/company/[id] error:", error);

        return NextResponse.json({
            success: false,
            message: "Internal server error",
            error: error?.message || "Something went wrong",
        }, { status: 500 });
    }
}






export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    //id you use  {params}: { params: { id: string } } then only it will work as it desture and then use lese undefine


    try {
        const {id} = await  params
        const body = await req.json()
        const user = await getUserFromCookie();
        const user_id = user?.id
        if (!user_id) {
            return NextResponse.json({
                success: false,
                message: "Id is empty"
            })
        }
        const owner = await prismaClient.company.findUnique({
            where: {
                id: id
            }
        })
        if(!owner){
            return NextResponse.json({
                    success:false,
                    message:"company not found  "
                })
        }
        if (user_id == owner?.ownerId) {
            const res = await prismaClient.company.update({
                where: {
                    id,
                },
                data: body
            })
            if (res) {
                return NextResponse.json({
                    success: true,
                    message: "Company Record Updated successfully"
                })
            }
            else {
                return NextResponse.json({
                    success: false,
                    message: "Oops unable to update record "
                })
            }
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Only owner is allow to made changes "
            })
        }


    }
    catch (err:any) {
        return NextResponse.json({
            success: false,
            message: err?.message
        })
    }



}



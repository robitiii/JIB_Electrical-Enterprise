import { NextResponse } from "next/server";
import { ContactDirective, ContactResponse } from "@/types";

export async function POST(request: Request) {
  try {
    const body: Partial<ContactDirective> = await request.json();

    if (!body.identifier || !body.geographicSector || !body.infrastructureRequirements) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message: "All parameters are mandatory to establish directive link.",
        },
        { status: 400 }
      );
    }

    const directiveId = `JIB-DIR-${Date.now().toString(36).toUpperCase()}`;

    // Here the directive can be persisted to a DB or dispatched via email/webhook
    console.log(`[Directive Received] ID: ${directiveId}`, body);

    return NextResponse.json<ContactResponse>({
      success: true,
      message: "Directive transmitted successfully. Operations control has been notified.",
      directiveId,
    });
  } catch (error) {
    console.error("Failed to process contact directive:", error);
    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message: "Failed to transmit directive. System link error.",
      },
      { status: 500 }
    );
  }
}

export function GET(req: Request, res: Response) {
  return Response.json({ message: process.env.MESSAGE });
}

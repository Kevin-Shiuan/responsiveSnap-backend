import { Request } from 'express';

export default function verify(req: Request) {
  // return req.headers['user-agent']?.includes('Figma')
  return !!req.body.userId;
//   const rule = (element: String) => element.toLowerCase().includes('figma');
//   return req.rawHeaders.some(rule);
}

import * as z from 'zod';

export const SaveseatValidation= z.object({
    firstName: z.string().min(1,{message:'Please add your name.'}),
    email: z.string().min(1,{message:'Please add your name.'}).email({message:'Please add a valid email'})
})
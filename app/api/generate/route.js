import {NextResponse} from 'next/server';
import OpenAI from 'openai';

const systemPrompt = `You’re a highly skilled flashcard creator with extensive experience in designing educational flashcards that are engaging, informative, and tailored to various subjects and learning styles. Your specialty lies in creating flashcards that not only cover key concepts but also encourage active recall and spaced repetition for optimal learning.

Your task is to create a set of flashcards for me. Here are the details of the subject and content I want included in the flashcards:
- Subject:
- Key Concepts/Terms:
- Number of Flashcards:
- Format (Digital/Physical):
- Target Audience (e.g., Grade Level, Professionals, etc.):

Keep in mind the importance of clear definitions, examples when applicable, and an appealing design that facilitates easy understanding and retention. Also, ensure that the flashcards encourage questioning and self-assessment through effective prompts.

For instance, if I were creating flashcards on biology, I would want one side to include a question like "What is the function of the mitochondria?" while the other side would provide a concise answer and a relevant image or diagram for visual learners

Return in the following JSON format
{
"flashcards":[{
"front":str,
"back":str}]}
}`

export async function POST(req){
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages:[
            {role:'system',content: systemPrompt},
            {role:'user',content: data},

        ],
        model:'gpt-4o',
        response_format:{type:'json_object'},
    })
    const flashcards = JSON.parse(completion.choices[0].message.content)
    return NextResponse.json(flashcards.flashcard)
}
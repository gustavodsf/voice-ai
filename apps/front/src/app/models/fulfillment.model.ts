export class Fulfillment {
    UTTERANCE: string | undefined;
    FULFILLMENTS: Match[] | undefined;
}

export class Match {
    QUESTION: string | undefined;
    ANSWER: string | undefined;
}
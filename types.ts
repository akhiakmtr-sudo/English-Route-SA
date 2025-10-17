export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  destination: string;
}

export interface Event {
  type: string;
  title: string;
  country: string;
  lastDateToApply: string;
  points: string[];
  imageUrl: string;
  detailsUrl?: string;
}

// FIX: Add and export MessageSender enum and ChatMessage interface for AiAdvisor component.
export enum MessageSender {
  USER = 'USER',
  AI = 'AI',
}

export interface ChatMessage {
  sender: MessageSender;
  text: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  destination: string;
}

// FIX: Add and export the Event interface for the Events component.
export interface Event {
  type: string;
  title: string;
  date: string;
  time: string;
  description: string;
}

// FIX: Define and export ChatMessage and MessageSender types for the AI Advisor component.
export enum MessageSender {
  USER = 'user',
  AI = 'ai',
}

export interface ChatMessage {
  sender: MessageSender;
  text: string;
}

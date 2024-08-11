import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.setInitialData();
  }

  async setInitialData() {
    const currentData = await this._storage?.get('faqData');
    if (!currentData) {
      const initialData = {
        categories: [
          {
            name: "Pineapple related questions",
            questions: [
              {
                question: "How do I peel my Pineapple?",
                answer: "To peel a pineapple, first cut off the top and bottom. Stand it upright and slice off the skin in strips. Remove any remaining 'eyes' with a paring knife."
              },
              {
                question: "How do I store my Pineapple?",
                answer: "Store whole pineapples at room temperature for 1-2 days, or in the refrigerator for 3-5 days. Cut pineapple should be stored in an airtight container in the refrigerator for up to 5-7 days."
              },
              {
                question: "How do I ripen my Pineapple?",
                answer: "Pineapples don't continue to ripen after harvest. Choose a ripe pineapple by smelling the base for a sweet aroma and checking if the leaves are green and fresh-looking."
              }
            ]
          },
          {
            name: "System related questions",
            questions: [
              // Add system-related questions here
            ]
          },
          {
            name: "Support related questions",
            questions: [
              // Add support-related questions here
            ]
          }
        ]
      };
      await this._storage?.set('faqData', initialData);
    }
  }

  async getFaqData() {
    return this._storage?.get('faqData');
  }
}



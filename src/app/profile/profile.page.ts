import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  faqData = [
    {
      title: 'Nigerian Land Law FAQs:',
      expanded: false,
      questions: [
        {
          question: 'What is the Land Use Act of 1978?',
          answer: 'The Land Use Act of 1978 is a Nigerian statute that vests all land in each state in the governor of that state, who holds it in trust for the people and administers it for their benefit. It nationalized all land in Nigeria and sets out the framework for land ownership and administration.',
          expanded: false
        },
        {
          question: 'What is a Certificate of Occupancy (C of O)?',
          answer: 'A Certificate of Occupancy (C of O) is a legal document issued by the state government that grants a person or corporate entity the right to use and occupy land for a specified period, typically 99 years.',
          expanded: false
        },
        {
          question: 'What is a Deed of Assignment?',
          answer: 'A Deed of Assignment is a legal document that transfers ownership of land or property from one party to another. It serves as proof of ownership and is usually registered with the state\'s land registry.',
          expanded: false
        },
        {
          question: 'What is the difference between a Statutory Right of Occupancy and a Customary Right of Occupancy?',
          answer: 'A Statutory Right of Occupancy is issued by the government under the Land Use Act, typically in urban areas, and is evidenced by a Certificate of Occupancy. A Customary Right of Occupancy is recognized under customary law, usually applicable in rural areas, and acknowledges land ownership according to local customs and practices.',
          expanded: false
        },
        {
          question: 'What is Governor\'s Consent, and why is it necessary?',
          answer: 'Governor\'s Consent is a requirement under the Land Use Act that mandates the approval of the state governor before any transfer or assignment of land rights can be legally valid. It ensures that land transactions are transparent and helps prevent fraud.',
          expanded: false
        },
        {
          question: 'What are the processes for registering land in Nigeria?',
          answer: 'The process generally involves conducting a survey of the land, obtaining a Certificate of Occupancy or equivalent title, applying for Governor\'s Consent, and registering the land with the state land registry.',
          expanded: false
        },
        {
          question: 'Can foreigners own land in Nigeria?',
          answer: 'Yes, foreigners can own land in Nigeria, but the process is regulated. The Land Use Act permits foreign ownership, typically through long-term leases rather than outright ownership.',
          expanded: false
        },
        {
          question: 'What are the rights of a tenant under Nigerian law?',
          answer: 'Tenants have the right to quiet enjoyment of the property, reasonable notice before eviction, and to live in a property that meets minimum standards of health and safety. The Tenancy Law also protects tenants from unlawful eviction.',
          expanded: false
        },
        {
          question: 'How can disputes over land ownership be resolved?',
          answer: 'Land disputes can be resolved through mediation, arbitration, or litigation in court. Customary courts may also handle disputes involving customary land tenure.',
          expanded: false
        },
        {
          question: 'What is the role of the Land Registry?',
          answer: 'The Land Registry is responsible for recording all land transactions, including the issuance of land titles, transfers, mortgages, and other encumbrances. It ensures the security of land tenure by providing a public record of land ownership.',
          expanded: false
        }
      ]
    },
   
    
    {
      title: 'Nigerian Land Law FAQs:',
      expanded: false,
      questions: [
        {
          question: 'What is the Land Use Act of 1978?',
          answer: 'The Land Use Act of 1978 is a Nigerian statute that vests all land in each state in the governor of that state, who holds it in trust for the people and administers it for their benefit. It nationalized all land in Nigeria and sets out the framework for land ownership and administration.',
          expanded: false
        },
        {
          question: 'What is a Certificate of Occupancy (C of O)?',
          answer: 'A Certificate of Occupancy (C of O) is a legal document issued by the state government that grants a person or corporate entity the right to use and occupy land for a specified period, typically 99 years.',
          expanded: false
        },
        {
          question: 'What is a Deed of Assignment?',
          answer: 'A Deed of Assignment is a legal document that transfers ownership of land or property from one party to another. It serves as proof of ownership and is usually registered with the state\'s land registry.',
          expanded: false
        },
        {
          question: 'What is the difference between a Statutory Right of Occupancy and a Customary Right of Occupancy?',
          answer: 'A Statutory Right of Occupancy is issued by the government under the Land Use Act, typically in urban areas, and is evidenced by a Certificate of Occupancy. A Customary Right of Occupancy is recognized under customary law, usually applicable in rural areas, and acknowledges land ownership according to local customs and practices.',
          expanded: false
        },
        {
          question: 'What is Governor\'s Consent, and why is it necessary?',
          answer: 'Governor\'s Consent is a requirement under the Land Use Act that mandates the approval of the state governor before any transfer or assignment of land rights can be legally valid. It ensures that land transactions are transparent and helps prevent fraud.',
          expanded: false
        },
        {
          question: 'What are the processes for registering land in Nigeria?',
          answer: 'The process generally involves conducting a survey of the land, obtaining a Certificate of Occupancy or equivalent title, applying for Governor\'s Consent, and registering the land with the state land registry.',
          expanded: false
        },
        {
          question: 'Can foreigners own land in Nigeria?',
          answer: 'Yes, foreigners can own land in Nigeria, but the process is regulated. The Land Use Act permits foreign ownership, typically through long-term leases rather than outright ownership.',
          expanded: false
        },
        {
          question: 'What are the rights of a tenant under Nigerian law?',
          answer: 'Tenants have the right to quiet enjoyment of the property, reasonable notice before eviction, and to live in a property that meets minimum standards of health and safety. The Tenancy Law also protects tenants from unlawful eviction.',
          expanded: false
        },
        {
          question: 'How can disputes over land ownership be resolved?',
          answer: 'Land disputes can be resolved through mediation, arbitration, or litigation in court. Customary courts may also handle disputes involving customary land tenure.',
          expanded: false
        },
        {
          question: 'What is the role of the Land Registry?',
          answer: 'The Land Registry is responsible for recording all land transactions, including the issuance of land titles, transfers, mortgages, and other encumbrances. It ensures the security of land tenure by providing a public record of land ownership.',
          expanded: false
        }
      ]
    },
    {
      title: 'Nigerian Copyright Law FAQs:',
      expanded: false,
      questions: [
        {
          question: 'What is copyright?',
          answer: 'Copyright is a legal right that grants the creator of an original work exclusive rights to its use and distribution, typically for a limited time, with the intention of allowing the creator to receive compensation for their intellectual investment.',
          expanded: false
        },
        {
          question: 'How long does copyright last in Nigeria?',
          answer: 'In Nigeria, copyright protection lasts for the lifetime of the author plus 70 years after their death for literary, musical, and artistic works. For sound recordings, films, and broadcasts, the duration is 50 years from the end of the year in which the work was first published.',
          expanded: false
        },
        {
          question: 'What works are eligible for copyright protection in Nigeria?',
          answer: 'Eligible works include literary, musical, and artistic works, films, sound recordings, broadcasts, and typographical arrangements of published editions.',
          expanded: false
        },
        {
          question: 'Can I use copyrighted material without permission?',
          answer: 'Using copyrighted material without permission is generally not allowed, except under specific circumstances such as fair use or fair dealing, where the use is for purposes like criticism, news reporting, or research.',
          expanded: false
        },
        {
          question: 'How can I register a copyright in Nigeria?',
          answer: 'In Nigeria, copyright registration is not mandatory, as copyright exists automatically upon creation of a work. However, registration with the Nigerian Copyright Commission (NCC) can serve as evidence of ownership in legal disputes.',
          expanded: false
        }
      ]
    },
    {
      title: 'Nigerian Wills and Probate Law FAQs:',
      expanded: false,
      questions: [
        {
          question: 'What is a will?',
          answer: 'A will is a legal document in which a person, known as the testator, expresses their wishes as to how their property should be distributed upon their death.',
          expanded: false
        },
        {
          question: 'Who can make a will in Nigeria?',
          answer: 'Any person of sound mind and who is at least 18 years old can make a will in Nigeria.',
          expanded: false
        },
        {
          question: 'What are the requirements for a valid will in Nigeria?',
          answer: 'A valid will in Nigeria must be written, signed by the testator, and witnessed by at least two witnesses who are present at the time of signing.',
          expanded: false
        },
        {
          question: 'Can a will be contested?',
          answer: 'Yes, a will can be contested on various grounds, such as lack of testamentary capacity, undue influence, fraud, or improper execution.',
          expanded: false
        },
        {
          question: 'What is probate?',
          answer: 'Probate is the legal process through which a will is validated by the court and the executor is granted authority to distribute the deceased\'s estate according to the will.',
          expanded: false
        }
      ]
    },
    {
      title: 'Nigerian Company Registration FAQs:',
      expanded: false,
      questions: [
        {
          question: 'What types of business entities can be registered in Nigeria?',
          answer: 'In Nigeria, common types of business entities include sole proprietorships, partnerships, private limited companies (Ltd), public limited companies (PLC), and incorporated trustees (NGOs).',
          expanded: false
        },
        {
          question: 'How can I register a company in Nigeria?',
          answer: 'To register a company in Nigeria, you need to reserve a company name, prepare the memorandum and articles of association, complete the required forms, pay the registration fees, and submit the documents to the Corporate Affairs Commission (CAC).',
          expanded: false
        },
        {
          question: 'What is the role of the Corporate Affairs Commission (CAC)?',
          answer: 'The CAC is the regulatory body responsible for the registration, regulation, and supervision of companies in Nigeria.',
          expanded: false
        },
        {
          question: 'What documents are required for company registration in Nigeria?',
          answer: 'Documents required include the completed registration forms, memorandum and articles of association, identification and address details of directors and shareholders, and evidence of payment of the registration fee.',
          expanded: false
        },
        {
          question: 'What is the minimum share capital for registering a private company in Nigeria?',
          answer: 'The minimum share capital for registering a private company in Nigeria is N100,000 (one hundred thousand naira).',
          expanded: false
        }
      ]
    },
    {
      title: 'Nigerian Investment and Securities Law FAQs:',
      expanded: false,
      questions: [
        {
          question: 'What is the Securities and Exchange Commission (SEC)?',
          answer: 'The SEC is the regulatory body responsible for regulating the Nigerian capital market, protecting investors, and ensuring market integrity.',
          expanded: false
        },
        {
          question: 'What are securities?',
          answer: 'Securities are financial instruments that represent ownership in a company (stocks), a creditor relationship with a governmental body or corporation (bonds), or rights to ownership (derivatives).',
          expanded: false
        },
        {
          question: 'What is the Nigerian Stock Exchange (NSE)?',
          answer: 'The NSE is the principal securities exchange in Nigeria where stocks, bonds, and other securities are traded.',
          expanded: false
        },
        {
          question: 'What is an Initial Public Offering (IPO)?',
          answer: 'An IPO is the process through which a private company offers shares to the public for the first time to raise capital.',
          expanded: false
        },
        {
          question: 'What are the risks of investing in securities?',
          answer: 'Investing in securities involves risks such as market risk, credit risk, liquidity risk, and regulatory risk. Investors should conduct thorough research and consider their risk tolerance before investing.',
          expanded: false
        }
      ]
    }
   
  ];

  filteredFaqData = [...this.faqData];
  searchTerm: string = '';

  constructor() {}

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }

  toggleQuestion(question: any) {
    question.expanded = !question.expanded;
  }

  filterQuestions() {
    const lowercaseSearchTerm = this.searchTerm.toLowerCase().trim();
    if (lowercaseSearchTerm === '') {
      this.filteredFaqData = [...this.faqData];
    } else {
      this.filteredFaqData = this.faqData
        .map(category => ({
          ...category,
          questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(lowercaseSearchTerm)
          ),
        }))
        .filter(category =>
          category.title.toLowerCase().includes(lowercaseSearchTerm) || category.questions.length > 0
        );
    }
  }
}

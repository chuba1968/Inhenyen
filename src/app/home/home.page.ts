import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  faqData = [
    {
      title: 'Questions and Answers on the Nigerian Copyright laws',
      expanded: true,
      questions: [
        {
          question: "What is copyright?",
          answer: "Copyright is a legal right granted to the creator of an original work, giving them exclusive rights to use, distribute, and license the work. Authority: Copyright Act, Cap C28, Laws of the Federation of Nigeria 2004.",
          expanded: false
        },
        {
          question: "What types of works are protected by copyright?",
          answer: "Copyright protects literary, musical, artistic works, cinematograph films, sound recordings, and broadcasts. Authority: Copyright Act, Section 1.",
          expanded: false
        },
        {
          question: "What is the duration of copyright protection in Nigeria?",
          answer: "Copyright protection lasts for the lifetime of the author plus 70 years after their death. For cinematograph films, sound recordings, and broadcasts, the duration is 50 years from the end of the year in which the work was first published. Authority: Copyright Act, Sections 2-3.",
          expanded: false
        },
        {
          question: "Can copyright protection be extended?",
          answer: "No, copyright protection cannot be extended beyond the statutory period. Authority: Copyright Act, Sections 2-3.",
          expanded: false
        },
        {
          question: "What is a copyright infringement?",
          answer: "Copyright infringement occurs when a copyrighted work is used, reproduced, or distributed without the permission of the copyright owner. Authority: Copyright Act, Section 15.",
          expanded: false
        },
        {
          question: "What are the exceptions to copyright infringement?",
          answer: "Exceptions include fair dealing for research, private study, criticism, review, reporting of news, and educational purposes. Authority: Copyright Act, Section 6.",
          expanded: false
        },
        {
          question: "What is fair dealing?",
          answer: "Fair dealing is a limitation to copyright that allows limited use of copyrighted material without permission for purposes such as research, private study, criticism, or review. Authority: Copyright Act, Section 6.",
          expanded: false
        },
        {
          question: "Can copyright be transferred?",
          answer: "Yes, copyright can be transferred in whole or in part through assignment, licensing, or testamentary disposition. Authority: Copyright Act, Section 11.",
          expanded: false
        },
        {
          question: "What is a copyright license?",
          answer: "A copyright license is an agreement where the copyright owner grants permission to another party to use the copyrighted work under specific terms and conditions. Authority: Copyright Act, Section 11.",
          expanded: false
        },
        {
          question: "What is a public domain work?",
          answer: "A public domain work is a work whose copyright has expired or never had copyright protection, making it free for public use without permission. Authority: Copyright Act, Sections 2-3.",
          expanded: false
        },
        {
          question: "What rights do copyright owners have?",
          answer: "Copyright owners have the exclusive rights to reproduce, distribute, perform, display, and create derivative works based on their copyrighted work. Authority: Copyright Act, Section 5.",
          expanded: false
        },
        {
          question: "What is moral rights in copyright?",
          answer: "Moral rights are the rights of the author to be attributed as the creator of the work and to object to any derogatory treatment of the work. Authority: Copyright Act, Section 12.",
          expanded: false
        },
        {
          question: "Can moral rights be waived?",
          answer: "Moral rights cannot be transferred but can be waived in writing by the author. Authority: Copyright Act, Section 12(3).",
          expanded: false
        },
        {
          question: "What is a derivative work?",
          answer: "A derivative work is a new work based on one or more pre-existing works, such as a translation, adaptation, or compilation. Authority: Copyright Act, Section 1.",
          expanded: false
        },
        {
          question: "Can software be copyrighted?",
          answer: "Yes, software is considered a literary work and is protected by copyright. Authority: Copyright Act, Section 1(2)(b).",
          expanded: false
        },
        {
          question: "What is the role of the Nigerian Copyright Commission (NCC)?",
          answer: "The NCC is responsible for administering and enforcing copyright laws, promoting copyright awareness, and licensing copyright societies in Nigeria. Authority: Copyright Act, Section 34.",
          expanded: false
        },
        {
          question: "What is a copyright collecting society?",
          answer: "A copyright collecting society is an organization that administers the rights of copyright owners and collects royalties on their behalf. Authority: Copyright Act, Section 39.",
          expanded: false
        },
        {
          question: "Can a work be copyrighted without registration?",
          answer: "Yes, copyright protection is automatic upon the creation of a work; registration is not required. Authority: Copyright Act, Section 1.",
          expanded: false
        },
        {
          question: "What is the difference between copyright and patent?",
          answer: "Copyright protects original works of authorship, while patents protect inventions or discoveries. Authority: Copyright Act, Section 1; Patents and Designs Act, Cap P2, Laws of the Federation of Nigeria 2004.",
          expanded: false
        },
        {
          question: "What is a copyright notice?",
          answer: "A copyright notice is a statement placed on a work to inform others that the work is protected by copyright. It typically includes the © symbol, the year of first publication, and the name of the copyright owner. Authority: Copyright Act, Section 18.",
          expanded: false
        },
        {
          question: "What remedies are available for copyright infringement?",
          answer: "Remedies for copyright infringement include damages, injunctions, accounts of profits, and delivery up of infringing copies. Authority: Copyright Act, Sections 15-17.",
          expanded: false
        },
        {
          question: "Can copyright protection be lost?",
          answer: "Copyright protection can be lost if the work enters the public domain or if the copyright owner fails to take legal action against infringement. Authority: Copyright Act, Section 2.",
          expanded: false
        },
        {
          question: "What is the significance of the case Reddington v. World-Ventures?",
          answer: "This case highlighted that the unauthorized use of copyrighted material, even if unintentional, constitutes infringement. Authority: Reddington v. World-Ventures (2018) LPELR-44388(CA).",
          expanded: false
        },
        {
          question: "What is the right of distribution in copyright?",
          answer: "The right of distribution allows the copyright owner to control the sale and distribution of copies of their work. Authority: Copyright Act, Section 5(1)(b).",
          expanded: false
        },
        {
          question: "Can a copyright owner sue for infringement without registration?",
          answer: "Yes, a copyright owner can sue for infringement without registration, as registration is not a prerequisite for protection or enforcement. Authority: Copyright Act, Section 1.",
          expanded: false
        },
        {
          question: "What is the doctrine of exhaustion in copyright law?",
          answer: "The doctrine of exhaustion, also known as the first sale doctrine, limits the copyright owner's rights after the first sale of a copy of their work. Authority: Copyright Act, Section 5(1)(b).",
          expanded: false
        },
        {
          question: "What constitutes originality in copyright law?",
          answer: "Originality means that the work originates from the author and involves some level of creativity or skill. Authority: Copyright Act, Section 1.",
          expanded: false
        },
        {
          question: "Can copyright be jointly owned?",
          answer: "Yes, copyright can be jointly owned if the work is created by two or more authors. Authority: Copyright Act, Section 10.",
          expanded: false
        },
        {
          question: "What is the significance of the case Nigerian Copyright Commission v. Music Industries Association of Nigeria?",
          answer: "This case affirmed the role of the NCC in regulating copyright and copyright collecting societies. Authority: Nigerian Copyright Commission v. Music Industries Association of Nigeria (2005) LPELR-7720(CA).",
          expanded: false
        },
        {
          question: "Can ideas be copyrighted?",
          answer: "No, copyright protects the expression of ideas, not the ideas themselves. Authority: Copyright Act, Section 1.",
          expanded: false
        },
        {
          question: "What is a parody in copyright law?",
          answer: "A parody is a work created to imitate or mock another work in a humorous or satirical way. It may qualify as fair use if it transforms the original work. Authority: Copyright Act, Section 6.",
          expanded: false
        },
        {
          question: "What is the public performance right?",
          answer: "The public performance right allows the copyright owner to control the public performance or display of their work. Authority: Copyright Act, Section 5(1)(c).",
          expanded: false
        },
        {
          question: "What is the difference between an exclusive and non-exclusive license?",
          answer: "An exclusive license grants the licensee the sole right to use the work, while a non-exclusive license allows multiple licensees to use the work. Authority: Copyright Act, Section 11.",
          expanded: false
        },
        {
          question: "What is the significance of the case Uwaifo v. Attorney General of Bendel State?",
          answer: "This case emphasized the constitutional protection of intellectual property rights, including copyright. Authority: Uwaifo v. Attorney General of Bendel State (1983) 4 NCLR 1.",
          expanded: false
        },
        {
          question: "What is a copyright infringement notice?",
          answer: "A copyright infringement notice is a formal notification sent to an alleged infringer, informing them of the infringement and demanding cessation. Authority: Copyright Act, Section 15.",
          expanded: false
        },
        {
          question: "Can a copyright owner license different rights to different parties?",
          answer: "Yes, a copyright owner can grant different licenses for different rights, such as reproduction, distribution, and public performance, to different parties. Authority: Copyright Act, Section 11.",
          expanded: false
        },
        {
          question: "What is the role of the Federal High Court in copyright matters?",
          answer: "The Federal High Court has exclusive jurisdiction over civil and criminal matters related to copyright infringement. Authority: Constitution of the Federal Republic of Nigeria, 1999; Copyright Act, Section 20.",
          expanded: false
        },
        {
          question: "What is the significance of the case Lawal-Osula v. Leki?",
          answer: "This case dealt with the issue of originality and established that a work must originate from the author to be eligible for copyright protection. Authority: Lawal-Osula v. Leki (1993) 5 NWLR (Pt. 294) 408.",
          expanded: false
        },
        {
          question: "What is the difference between a work-for-hire and an independent contractor in copyright?",
          answer: "In a work-for-hire arrangement, the employer owns the copyright; in an independent contractor arrangement, the contractor typically retains copyright unless otherwise agreed. Authority: Copyright Act, Section 10.",
          expanded: false
        },
        {
          question: "Can a copyright owner take legal action against online piracy?",
          answer: "Yes, a copyright owner can take legal action against online piracy, including seeking injunctions, damages, and other remedies. Authority: Copyright Act, Sections 15-17.",
          expanded: false
        },
        {
          question: "What is the significance of the case Olumide Popoola v. Israel Odia?",
          answer: "This case addressed the issue of copyright infringement and the entitlement of the copyright owner to damages. Authority: Olumide Popoola v. Israel Odia (2007) LPELR-CA/B/375/2004.",
          expanded: false
        },
        {
          question: "What is the Berne Convention?",
          answer: "The Berne Convention is an international treaty that sets minimum standards for copyright protection and ensures mutual recognition of copyright among member countries. Authority: Berne Convention for the Protection of Literary and Artistic Works, 1886.",
          expanded: false
        },
        {
          question: "What is the significance of the WIPO Copyright Treaty (WCT)?",
          answer: "The WCT is an international treaty that enhances copyright protection in the digital environment and provides guidelines for the protection of digital works. Authority: WIPO Copyright Treaty, 1996.",
          expanded: false
        },
        {
          question: "Can an author withdraw a licensed work from the market?",
          answer: "An author may withdraw a licensed work from the market only if the license agreement provides for such a right. Authority: Copyright Act, Section 11.",
          expanded: false
        },
        {
          question: "What is the role of the Copyright Society of Nigeria (COSON)?",
          answer: "COSON is a collective management organization responsible for the collection and distribution of royalties on behalf of copyright owners. Authority: Copyright Act, Section 39.",
          expanded: false
        },
        {
          question: "What constitutes public communication of a work?",
          answer: "Public communication includes broadcasting, streaming, or any other means of making a work available to the public. Authority: Copyright Act, Section 5(1)(d).",
          expanded: false
        },
        {
          question: "What is the difference between copyright infringement and plagiarism?",
          answer: "Copyright infringement is a legal violation of the exclusive rights of a copyright owner, while plagiarism is an ethical breach involving the unauthorized use of someone else's work without proper attribution. Authority: Copyright Act, Section 15.",
          expanded: false
        },
        {
          question: "What are the penalties for copyright infringement in Nigeria?",
          answer: "Penalties for copyright infringement include fines, imprisonment, or both, depending on the severity of the infringement. Authority: Copyright Act, Section 20.",
          expanded: false
        },
        {
          question: "What is the principle of national treatment in copyright?",
          answer: "The principle of national treatment requires member countries to provide foreign authors the same copyright protection as they provide to their own nationals. Authority: Berne Convention, Article 5.",
          expanded: false
        },
        {
          question: "What is the significance of the case Oyelade v. Arewa House Publishing Ltd?",
          answer: "This case affirmed the exclusive rights of the copyright owner and the remedies available for infringement. Authority: Oyelade v. Arewa House Publishing Ltd (2010) LPELR-4692(CA).",
          expanded: false
        }
        
      ]
    }  ];

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
  }}
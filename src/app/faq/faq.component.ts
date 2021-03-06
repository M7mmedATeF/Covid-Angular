import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(() => {
      /*--------------------------- BTNs & Articls ---------------------------*/
      /* Variabls */
      var articlBTNs = $('.question .innerQuestions .right .inner .aricleToggleBTN');
      var articles = $('.question .innerQuestions .right .inner div');
      var icons = $('.question .innerQuestions .right .inner .aricleToggleBTN .icon');
      /* Finction */
      articlBTNs.click(function() {
  
          articlBTNs.removeClass('active');
  
          articles.slideUp();
          this.children[1].innerHTML = "<i class=\"fas fa-plus\"></i>";
          icons.html("<i class=\"fas fa-plus\"></i>");
  
          if ($(this).next().css("display") == "none") {
              $(this).next().slideDown();
              this.children[1].innerHTML = "<i class=\"fas fa-minus\"></i>";
              $(this).addClass('active');
          } else {
              $(this).next().slideUp();
              this.children[1].innerHTML = "<i class=\"fas fa-plus\"></i>";
          }
  
      })
  
      /*--------------------------- BTNs & Articls ---------------------------*/
      /* Variabls */
      var sideBTNs = [$('.question .innerQuestions .left #btn1'),
          $('.question .innerQuestions .left #btn2'),
          $('.question .innerQuestions .left #btn3'),
          $('.question .innerQuestions .left #btn4'),
          $('.question .innerQuestions .left #btn5'),
          $('.question .innerQuestions .left #btn6'),
      ];
      var allSideBTNs = $('.question .innerQuestions .left button');
      var sections = [
          $('.question .innerQuestions .right #sec1'),
          $('.question .innerQuestions .right #sec2'),
          $('.question .innerQuestions .right #sec3'),
          $('.question .innerQuestions .right #sec4'),
          $('.question .innerQuestions .right #sec5'),
          $('.question .innerQuestions .right #sec6')
      ];
      var allSections = $('.question .innerQuestions .right .inner');
  
      sideBTNs[0].click(function() {
          sectionViewer(0);
      })
  
      sideBTNs[1].click(function() {
          sectionViewer(1);
      })
  
      sideBTNs[2].click(function() {
          sectionViewer(2);
      })
  
      sideBTNs[3].click(function() {
          sectionViewer(3);
      })
  
      sideBTNs[4].click(function() {
          sectionViewer(4);
      })
  
      sideBTNs[5].click(function() {
          sectionViewer(5);
      })
  
  
      function sectionViewer(x) {
          allSideBTNs.removeClass('active');
          sideBTNs[x].addClass('active');
  
          allSections.fadeOut(10);
          sections[x].fadeIn(1000).delay(10);
      }
  })
  }

}

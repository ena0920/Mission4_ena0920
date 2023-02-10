using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_ena0920.Models
{
    public class gradeCalculatorModel
    {
        [Required]
        public int Assignments { get; set; }

        [Required]
        public int GroupProjects { get; set; }

        [Required]
        public int Quizzes { get; set; }

        [Required]
        public int MidtermExam { get; set; }

        [Required]
        public int FinalExam { get; set; }

        [Required]
        public int Intex { get; set; }


    }
}

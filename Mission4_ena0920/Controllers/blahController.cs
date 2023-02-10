using Microsoft.AspNetCore.Mvc;
using Mission4_ena0920.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_ena0920.Controllers
{
    public class blahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(gradeCalculatorModel model)
        {
            return View();
        }
    }
}

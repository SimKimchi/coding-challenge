using NinjAPI.DAL;
using NinjAPI.Utility;
using System.Linq;

namespace NinjAPI.Validators
{
  public class BuzzwordValidator : IBuzzwordValidator
  {
    private const string NULL_OR_EMPTY_ERROR = "You did not enter anything!";
    private const string CONTAINS_NUMBERS_ERROR = "Do not enter numbers!";
    private const string NOT_FROM_AWESOME_LIST_ERROR = "Only enter buzzwords from the awesome list!";

    private readonly INinjaDA _ninjaDA;

    public BuzzwordValidator(INinjaDA ninjaDA)
    {
      _ninjaDA = ninjaDA;
    }

    public ValidatorResult Validate(string buzzwords)
    {
      if (string.IsNullOrEmpty(buzzwords))
      {
        return new ValidatorResult(false, NULL_OR_EMPTY_ERROR);
      }

      if (buzzwords.Any(char.IsDigit))
      {
        return new ValidatorResult(false, CONTAINS_NUMBERS_ERROR);
      }

      var awesomeList = _ninjaDA.GetAwesomeList();
      var wordList = ToolBox.CreateWordList(buzzwords);

      if (wordList.Any(w => !awesomeList.Contains(w)))
      {
        return new ValidatorResult(false, NOT_FROM_AWESOME_LIST_ERROR);
      }

      return new ValidatorResult(true);
    }
  }
}

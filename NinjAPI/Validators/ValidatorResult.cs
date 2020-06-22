namespace NinjAPI.Validators
{
    public class ValidatorResult
    {
        public readonly bool isValid;
        public readonly string errorMessage;

        public ValidatorResult(bool isValid, string errorMessage = null)
        {
            this.isValid = isValid;
            this.errorMessage = errorMessage;
        }
    }
}

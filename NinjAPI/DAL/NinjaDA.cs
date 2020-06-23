using Newtonsoft.Json;
using NinjAPI.Constants;
using System;
using System.Collections.Generic;
using System.IO;

namespace NinjAPI.DAL
{
  public class NinjaDA : INinjaDA
  {
    public List<string> GetNinjaAdjectives()
    {
      string ninjaAdjectivesJSON = ReadJSONFile(Path.Combine(Environment.CurrentDirectory, FilePaths.NinjaAdjectivesDB));

      return JsonConvert.DeserializeObject<List<string>>(ninjaAdjectivesJSON);
    }

    public List<string> GetNinjaNames()
    {
      string ninjaNamesJSON = ReadJSONFile(Path.Combine(Environment.CurrentDirectory, FilePaths.NinjaNamesDB));

      return JsonConvert.DeserializeObject<List<string>>(ninjaNamesJSON);
    }

    public List<string> GetAwesomeList()
    {
      string awesomeList = ReadJSONFile(Path.Combine(Environment.CurrentDirectory, FilePaths.AwesomeListDB));

      return JsonConvert.DeserializeObject<List<string>>(awesomeList);
    }

    private string ReadJSONFile(string path)
    {
      string jsonResult;

      using (StreamReader sr = new StreamReader(Path.Combine(path)))
      {
        jsonResult = sr.ReadToEnd();
      }

      return jsonResult;
    }
  }
}

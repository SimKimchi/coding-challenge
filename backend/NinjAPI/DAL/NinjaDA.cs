using Newtonsoft.Json;
using NinjAPI.Constants;
using NinjAPI.DTO;
using System;
using System.Collections.Generic;
using System.IO;

namespace NinjAPI.DAL
{
    public class NinjaDA : INinjaDA
    {
        public List<string> GetNinjaAdjectives() => GetNinjaDTO().NinjaAdjectives;

        public List<string> GetNinjaNames() => GetNinjaDTO().NinjaNames;

        /// <summary>
		/// Accesses the database (JSON file) and returns a list of ninja names and adjectives.
		/// </summary>
		private NinjaDTO GetNinjaDTO()
        {
            NinjaDTO ninjaDTO;

            using (StreamReader sr = new StreamReader(Path.Combine(Environment.CurrentDirectory, FilePaths.NinjaDB)))
            {
                string json = sr.ReadToEnd();
                ninjaDTO = JsonConvert.DeserializeObject<NinjaDTO>(json);
            }

            return ninjaDTO;
        }
    }
}

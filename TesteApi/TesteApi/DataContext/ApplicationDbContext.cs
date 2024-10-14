using Microsoft.EntityFrameworkCore;
using TesteApi.Models;

namespace TesteApi.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) 
            : base(options)
        { 
        }


        public DbSet<FuncionarioModel> Funcionarios { get; set; }
    }
}

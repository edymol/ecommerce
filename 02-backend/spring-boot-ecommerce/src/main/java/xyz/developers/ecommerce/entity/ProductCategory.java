package xyz.developers.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "product_category")
@Data
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Product> products;
}
